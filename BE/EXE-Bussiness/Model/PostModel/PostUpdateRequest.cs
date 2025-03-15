namespace EXE_Bussiness.Model.PostModel
{
	public class PostUpdateRequest
	{
		public string? Title { get; set; }
		public string? Description { get; set; }
		public decimal Price { get; set; }
		public int Status { get; set; }
		public string? SubCategoryId { get; set; }
	}
}
