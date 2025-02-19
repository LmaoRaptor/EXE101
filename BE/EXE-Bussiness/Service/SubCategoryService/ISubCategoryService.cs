using EXE_Bussiness.Model.SubCategoryModel;

namespace EXE_Bussiness.Service.SubCategoryService
{
	public interface ISubCategoryService
	{
		Task<IEnumerable<SubCategoryDTO>> GetAllSubCategories();
		Task CreateSubCategory(SubCategoryCreateRequest subCategoryDTO);
		Task<bool> UpdateSubCategory(Ulid id, SubCategoryCreateRequest subCategoryDTO);
		Task<bool> DeleteSubCategory(Ulid id);
		Task<SubCategoryDTO> GetSubCategoryById(Ulid id);
	}
}
