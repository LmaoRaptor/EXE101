using EXE_Data.Data.EnumType;

namespace EXE_Data.Data.Entity
{
	public class Post
	{
		public Post()
		{
			Images = new List<Image>();
		}
		public Ulid Id { get; set; }
		public string? Title { get; set; }
		public decimal Price { get; set; }
		public string? Description { get; set; }
		public PostStatusEnum Status { get; set; }
		public DateTime CreatedAt { get; set; }
		public DateTime UpdatedAt { get; set; }
		public Ulid UserId { get; set; }
		public User? User { get; set; }
		public Ulid CategoryId { get; set; }
		public Category Category { get; set; }
		public Ulid SubCategoryId { get; set; }
		public SubCategory? SubCategory { get; set; }
		public List<Image>? Images { get; set; }
	}
}
