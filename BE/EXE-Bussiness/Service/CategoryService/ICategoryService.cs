using EXE_Bussiness.Model.SubCategoryModel;

namespace EXE_Bussiness.Service.CategoryService
{
	public interface ICategoryService
	{
		/// <summary>
		/// get all category and subcategory
		/// </summary>
		/// <returns></returns>
		Task<List<CategoryDTO>> GetAll();
		Task Create(CategoryCreateRequest request);
		Task<bool> Update(Ulid id, CategoryCreateRequest request);
		/// <summary>
		/// Delete category by id and all subcategories - return false if category not found and not deleted
		/// </summary>
		/// <param name="id"></param>
		/// <returns></returns>
		Task<bool> Delete(Ulid id);
		Task<CategoryDTO> GetById(Ulid id);
	}
}