using AutoMapper;
using EXE_Bussiness.Model.UserModel;
using EXE_Data.Data;
using EXE_Data.Data.Entity;
using EXE_Data.Data.EnumType;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace EXE_Bussiness.Service.UserService
{
	public class UserService : IUserService
	{
		private readonly AppDBContext _context;
		private readonly IMapper _mapper;
		private readonly ILogger<UserService> _logger;
		private readonly UserManager<User> _userManager;

		public UserService(AppDBContext context, IMapper mapper, ILogger<UserService> logger, UserManager<User> userManager)
		{
			_mapper = mapper;
			_context = context;
			_logger = logger;
			_userManager = userManager;
		}
		public async Task<List<UserDTO>> GetAll()
		{
			var users = await _context.Users.ToListAsync();
			return _mapper.Map<List<UserDTO>>(users);
		}

		public async Task<bool> UpgradeAccount(Ulid paymentId)
		{
			var payment = await _context.Payments.FindAsync(paymentId);
			if(payment == null)
			{
				_logger.LogError("Payment not found");
				return false;
			}
			await AddUserToRole(payment.RoleName, payment.UserEmail);
			payment.IsDone = true;
			await _context.SaveChangesAsync();
			return true;
		}

		public async Task AddRole(string roleName)
		{
			Role role = new Role
			{
				Name = roleName,
				NormalizedName = roleName.ToUpper(),
				Id = Ulid.NewUlid()
			};
			_context.Roles.Add(role);
			await _context.SaveChangesAsync();
			_logger.LogInformation("Role added successfully");
		}

		public async Task<string> AddUserToRole(string roleName, string email)
		{
			var user = await _userManager.FindByEmailAsync(email);
			if(user == null)
			{
				_logger.LogError("User not found");
				return "User not found";
			}
			var role = await _context.Roles.FirstOrDefaultAsync(x => x.Name == roleName);
			if(role == null)
			{
				_logger.LogError("Role not found");
				return "Role not found";
			}
			var roles = await _userManager.GetRolesAsync(user);
			if (roles.Contains(roleName))
			{
				_logger.LogError("User already have this role");
				return "User already have this role";
			}
			user.IsSaler = true;
			user.PremiumExpired = DateTime.Now.AddDays((double)role.Exprired);
			var result = await _userManager.AddToRoleAsync(user, roleName);
			_context.SaveChanges();
			_logger.LogInformation("Role added successfully");
			return "Role added successfully";
		}

		public async Task<int> CreateRequestUpdate(UpgradeAccountRequest request)
		{
			string userId = request.UserName.Substring(5);
			Ulid ulid;
			if(!Ulid.TryParse(userId, out ulid))
			{
				_logger.LogError("Invalid user id");
				return 3;
			}
			var user = _context.Users.Find(ulid);
			if (user == null)
			{
				_logger.LogError("User not found");
				return 1;
			}
			var role = await _context.Roles.FirstOrDefaultAsync(x => x.Name == request.RoleName);
			if(role == null)
			{
				_logger.LogError("Role not found");
				return 2;
			}
			decimal price = (decimal)_context.Roles.FirstOrDefault(x => x.Name == request.RoleName).Price;
			var payment = new Payment
			{
				Id = Ulid.NewUlid(),
				RoleName = request.RoleName,
				UserEmail = user.NormalizedEmail,
				UserName = user.UserName,
				IsDone = false,
				Amount = price
			};
			_context.Payments.Add(payment);
			await _context.SaveChangesAsync();
			_logger.LogInformation("Request created successfully");
			return 0;
		}

		public async Task<IEnumerable<Payment>> PaymentList()
		{
			return _context.Payments.Where(x => x.IsDone == false).ToList();
		}
	}
}
