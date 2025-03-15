using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EXE_Data.Data.Entity
{
	public class Payment
	{
		public Ulid Id { get; set; }
		public decimal Amount { get; set; }
		public string UserEmail { get; set; }
		public string UserName { get; set; }
		public string RoleName { get; set; }
		public bool IsDone { get; set; }
	}
}
