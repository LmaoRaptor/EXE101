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

		public async Task<bool> UpgradeAccount(Ulid id)
		{
			var user = await _context.Users.FindAsync(id);
			if(user == null)
			{
				_logger.LogError("User not found");
				return false;
			}
			user.IsSaler = true;
			await _userManager.AddToRoleAsync(user, "Premium");
			_logger.LogInformation("User upgraded to premium");
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
			var result = await _userManager.AddToRoleAsync(user, roleName);
			_context.SaveChanges();
			_logger.LogInformation("Role added successfully");
			return "Role added successfully";
		}
	}
}
