namespace EXE_Bussiness.Model.AuthModel
{
	public class LoginResponse
	{
		public string UserName { get; set; }
		public List<string> Role { get; set; }
		public string Token { get; set; }
		public long Expired { get; set; }
		public DateTime ExpiredAt { get; set; }
	}
}
