using EXE_Bussiness.Model.UserModel;

namespace EXE_Bussiness.Service.UserService
{
	public interface IUserService
	{
		Task<List<UserDTO>> GetAll();
	}
}
