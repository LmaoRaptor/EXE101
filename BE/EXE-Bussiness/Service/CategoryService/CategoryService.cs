using AutoMapper;
using EXE_Bussiness.Model.SubCategoryModel;
using EXE_Data.Data;
using EXE_Data.Data.Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace EXE_Bussiness.Service.CategoryService
{
	public class CategoryService : ICategoryService
	{
		readonly IMapper _mapper;
		readonly AppDBContext _context;
		readonly ILogger<CategoryService> _logger;
		public CategoryService(IMapper mapper, AppDBContext context, ILogger<CategoryService> logger)
		{
			_mapper = mapper;
			_context = context;
			_logger = logger;
		}
		public async Task Create(CategoryCreateRequest request)
		{
			var category = _mapper.Map<Category>(request);
			category.Id = Ulid.NewUlid();
			_context.Categories.Add(category);
			await _context.SaveChangesAsync();
		}

		public async Task<bool> Delete(Ulid id)
		{
			var category = await _context.Categories.Include(x => x.SubCategories).FirstOrDefaultAsync(x => x.Id == id);
			if(category == null)
			{
				_logger.LogError("Category not found");
				return false;
			}
			_context.SubCategories.RemoveRange(_context.SubCategories.Where(x => x.CategoryId == id).ToList());
			await _context.SaveChangesAsync();
			_context.Categories.Remove(category);
			var result = await _context.SaveChangesAsync() > 0;
			if(result)
			{
				_logger.LogInformation("Category deleted successfully");
			}
			else
			{
				_logger.LogError("Category deletion failed");
			}
			return result;
		}

		public async Task<List<CategoryDTO>> GetAll()
		{
			var categories = _context.Categories.Include(x => x.SubCategories).ToList();
			var result = _mapper.Map<List<CategoryDTO>>(categories);
			for(int i = 0; i < categories.Count; i++)
			{
				result[i].SubCategories = _mapper.Map<List<SubCategoryDTO>>(categories[i].SubCategories);
			}
			return result;
		}

		public async Task<CategoryDTO> GetById(Ulid id)
		{
			var category = await _context.Categories.Include(x => x.SubCategories).FirstOrDefaultAsync(x => x.Id == id);
			if(category == null)
			{
				_logger.LogError("Category not found");
				return null;
			}
			var result = _mapper.Map<CategoryDTO>(category);
			result.SubCategories = _mapper.Map<List<SubCategoryDTO>>(category.SubCategories);
			return result;
		}

		public async Task<bool> Update(Ulid id, CategoryCreateRequest request)
		{
			var category = await _context.Categories.FindAsync(id);
			if(category == null)
			{
				_logger.LogError("Category not found");
				return false;
			}
			category = _mapper.Map(request, category);
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
