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
	}
}
