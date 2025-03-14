using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EXE_Bussiness.Model.UserModel
{
	public class AddUserToRoleRequest
	{
		public string RoleName { get; set; }
		public string Email { get; set; }
	}
}
