using EXE_Bussiness.Model.UserModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EXE_Bussiness.Service.UserService
{
    public interface IUserService
    {
        Task<List<UserDTO>> GetAll();
    }
}
