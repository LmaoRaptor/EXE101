using AutoMapper;
using EXE_Bussiness.Model.SubCategoryModel;
using EXE_Data.Data;
using EXE_Data.Data.Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace EXE_Bussiness.Service.SubCategoryService
{
	public class SubCategoryService : ISubCategoryService
	{
		readonly IMapper _mapper;
		readonly AppDBContext _context;
		readonly ILogger<SubCategoryService> _logger;
		public SubCategoryService(IMapper mapper, AppDBContext context, ILogger<SubCategoryService> logger)
		{
			_mapper = mapper;
			_context = context;
			_logger = logger;
		}
		public async Task CreateSubCategory(SubCategoryCreateRequest subCategoryDTO)
		{
			var subCategory = _mapper.Map<SubCategory>(subCategoryDTO);
			subCategory.Id = Ulid.NewUlid();
			_context.SubCategories.Add(subCategory);
			await _context.SaveChangesAsync();
		}

		public async Task<bool> DeleteSubCategory(Ulid id)
		{
			var subCategory = await _context.SubCategories.FindAsync(id);
			if(subCategory == null)
			{
				_logger.LogWarning($"SubCategory with ID {id} not found.");
				return false;
			}
			_context.SubCategories.Remove(subCategory);
			var result = await _context.SaveChangesAsync() > 0;
			if(result)
			{
				_logger.LogInformation("Category deleted successfully");
			}
			else
			{
				_logger.LogError("Category deleted failed");
			}
			return result;
		}

		public async Task<IEnumerable<SubCategoryDTO>> GetAllSubCategories()
		{
			var subCategories = await _context.SubCategories.ToListAsync();
			return _mapper.Map<IEnumerable<SubCategoryDTO>>(subCategories);
		}

		public async Task<SubCategoryDTO> GetSubCategoryById(Ulid id)
		{
			var subCategory = await _context.SubCategories.FindAsync(id);
			return _mapper.Map<SubCategoryDTO>(subCategory);
		}

		public async Task<bool> UpdateSubCategory(Ulid id, SubCategoryCreateRequest subCategoryDTO)
		{
			var subCategory = await _context.SubCategories.FindAsync(id);
			if(subCategory == null)
			{
				_logger.LogWarning($"SubCategory with ID {id} not found.");
				return false;
			}
			subCategory = _mapper.Map(subCategoryDTO, subCategory);
			_context.SubCategories.Update(subCategory);
			var result = await _context.SaveChangesAsync() > 0;
			if(result)
			{
				_logger.LogInformation("Category updated successfully");
			}
			else
			{
				_logger.LogError("Category update failed");
			}
			return result;
		}
	}
}
