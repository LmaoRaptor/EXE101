using EXE_Bussiness.Model.UserModel;
using EXE_Data.Data.Entity;

namespace EXE_Bussiness.Service.UserService
{
	public interface IUserService
	{
		Task<List<UserDTO>> GetAll();
		Task<bool> UpgradeAccount(Ulid paymentId);
		Task AddRole(string roleName);
		Task<string> AddUserToRole(string roleName, string email);
		Task<int> CreateRequestUpdate(UpgradeAccountRequest request);
		Task<IEnumerable<Payment>> PaymentList();
	}
}
