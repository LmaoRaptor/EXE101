using Microsoft.AspNetCore.Identity;

namespace EXE_Data.Data.Entity
{
	public class Role : IdentityRole<Ulid>
	{
		public decimal? Exprired { get; set; }
		public decimal? Price { get; set; }
	}
}
