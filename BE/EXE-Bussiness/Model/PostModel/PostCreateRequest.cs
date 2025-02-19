namespace EXE_Bussiness.Model.PostModel
{
	public class PostCreateRequest
	{
		public string? Title { get; set; }
		public string? Description { get; set; }
		public decimal Price { get; set; }
		public string? SubCategoryId { get; set; }
		public string? UserId { get; set; }
		public string? ContactPhone { get; set; }
		public string? ContactOther { get; set; }
		public List<string>? Images { get; set; }
	}
}
