using AutoMapper;
using EXE_Bussiness.Model.UserModel;
using EXE_Data.Data;
using EXE_Data.Data.EnumType;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace EXE_Bussiness.Service.UserService
{
	public class UserService : IUserService
	{
		private readonly AppDBContext _context;
		private readonly IMapper _mapper;
		private readonly ILogger<UserService> _logger;

		public UserService(AppDBContext context, IMapper mapper, ILogger<UserService> logger)
		{
			_mapper = mapper;
			_context = context;
			_logger = logger;
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
				return false;
			}
			user.Status = UserStatusEnum.Premium;

			return true;
		}
	}
}
