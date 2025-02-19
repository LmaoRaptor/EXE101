namespace EXE_Data.Extensions
{
	public static class DateTimeExtension
	{
		public static string ToPrint(this DateTime dateTime)
		{
			return dateTime.ToString("yyyy-MM-dd HH:mm:ss");
		}
	}
}
