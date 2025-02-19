using System.ComponentModel;

namespace EXE_Data.Data.EnumType
{
	public enum PostStatusEnum
	{
		New,
		[Description("Sold Out")]
		SoldOut
	}
}
