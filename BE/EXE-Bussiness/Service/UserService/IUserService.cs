using EXE_Bussiness.Model.UserModel;

namespace EXE_Bussiness.Service.UserService
{
	public interface IUserService
	{
		Task<List<UserDTO>> GetAll();
		Task<bool> UpgradeAccount(Ulid id);
		Task AddRole(string roleName);
		Task<string> AddUserToRole(string roleName, string email);
	}
}
