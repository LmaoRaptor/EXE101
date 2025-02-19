using EXE_Bussiness.Model.UserModel;

namespace EXE_Bussiness.Model.PostModel
{
	public class PostDetail
	{
		public string? Id { get; set; }
		public string Title { get; set; }
		public string Price { get; set; }
		public string Description { get; set; }
		public string Status { get; set; }
		public string? ContactPhone { get; set; }
		public string? ContactOther { get; set; }
		public string? CreatedAt { get; set; }
		public string? UpdatedAt { get; set; }
		public UserDTO? User { get; set; }
		public string SubCategoryId { get; set; }
		public string SubCategoryName { get; set; }
		public List<string> Images { get; set; }
	}
}
