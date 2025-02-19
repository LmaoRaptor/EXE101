using AutoMapper;
using EXE_Bussiness.Model.SubCategoryModel;
using EXE_Bussiness.Service.CategoryService;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EXE_API.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class CategoryController : ControllerBase
	{
		readonly ICategoryService _categoryService;
		public CategoryController(ICategoryService categoryService, IMapper mapper)
		{
			_categoryService = categoryService;
		}
		// GET: api/<CategoryController>
		[HttpGet]
		public async Task<IActionResult> GetAll()
		{
			List<CategoryDTO> categories = await _categoryService.GetAll();
			return Ok(categories);
		}
		[HttpGet("{id}")]
		public async Task<IActionResult> GetById(string id)
		{
			Ulid ulid;
			if(!Ulid.TryParse(id, out ulid))
			{
				return BadRequest("id not in format");
			}
			var category = await _categoryService.GetById(ulid);
			if(category == null)
			{
				return NotFound();
			}
			return Ok(category);
		}
		[HttpPost]
		public async Task<IActionResult> AddCategory([FromBody] CategoryCreateRequest categoryDTO)
		{
			if(!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}
			await _categoryService.Create(categoryDTO);
			return Ok();
		}
		[HttpPut("{id}/update")]
		public async Task<IActionResult> UpdateCategory(string id, [FromBody] CategoryCreateRequest categoryDTO)
		{
			if(!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}
			Ulid ulid;
			if(!Ulid.TryParse(id, out ulid))
			{
				return BadRequest("id not in format");
			}
			var re = await _categoryService.Update(ulid, categoryDTO);
			if(!re)
			{
				return NotFound();
			}
			return Ok();
		}
		[HttpDelete("{id}/delete")]
		public async Task<IActionResult> DeleteCategory(string id)
		{

			Ulid ulid;
			if(!Ulid.TryParse(id, out ulid))
			{
				return BadRequest("id not in format");
			}
			var re = await _categoryService.Delete(ulid);
			if(!re)
			{
				return NotFound();
			}
			return Ok();
		}
	}
}
