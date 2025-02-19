using System.ComponentModel;
using System.Reflection;

namespace EXE_Data.Extensions
{
	public static class EnumExtension
	{
		public static string GetName(this Enum value)
		{
			FieldInfo field = value.GetType().GetField(value.ToString());
			DescriptionAttribute attribute = field.GetCustomAttribute<DescriptionAttribute>();
			return attribute != null ? attribute.Description : value.ToString();
		}
	}
}
