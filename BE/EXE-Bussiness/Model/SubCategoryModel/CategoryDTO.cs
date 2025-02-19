namespace EXE_Bussiness.Model.SubCategoryModel
{
	public class CategoryDTO
	{
		public string Id { get; set; }
		public string? Name { get; set; }
		public List<SubCategoryDTO> SubCategories { get; set; }
	}
}
