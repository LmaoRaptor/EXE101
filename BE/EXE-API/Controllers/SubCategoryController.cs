using EXE_Bussiness.Model.SubCategoryModel;
using EXE_Bussiness.Service.SubCategoryService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EXE_API.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class SubCategoryController : ControllerBase
	{
		private readonly ISubCategoryService _subCategoryService;
		public SubCategoryController(ISubCategoryService subCategoryService)
		{
			_subCategoryService = subCategoryService;
		}
		// GET: api/<SubCategoryController>
		[HttpGet]
		public async Task<IActionResult> GetAll()
		{
			var subCategories = await _subCategoryService.GetAllSubCategories();
			return Ok(subCategories);
		}

		// GET api/<SubCategoryController>/5
		[HttpGet("{id}")]
		public async Task<IActionResult> GetById(string id)
		{
			Ulid ulid;
			if(!Ulid.TryParse(id, out ulid))
			{
				return BadRequest("id not in format");
			}
			var subCategory = await _subCategoryService.GetSubCategoryById(ulid);
			if(subCategory == null)
			{
				return NotFound();
			}
			return Ok(subCategory);
		}

		// POST api/<SubCategoryController>
		[HttpPost]
		public async Task<IActionResult> Create([FromBody] SubCategoryCreateRequest value)
		{
			if(!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}
			await _subCategoryService.CreateSubCategory(value);
			return Ok();
		}

		// PUT api/<SubCategoryController>/5
		[HttpPut("{id}/update")]
		public async Task<IActionResult> Put(string id, [FromBody] SubCategoryCreateRequest value)
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
			var re = await _subCategoryService.UpdateSubCategory(ulid, value);
			if(!re)
			{
				return NotFound();
			}
			return Ok("Sub-Category updated");
		}

		// DELETE api/<SubCategoryController>/5
		[HttpDelete("{id}/delete")]
		public async Task<IActionResult> Delete(string id)
		{
			Ulid ulid;
			if(!Ulid.TryParse(id, out ulid))
			{
				return BadRequest("id not in format");
			}
			var re = await _subCategoryService.DeleteSubCategory(ulid);
			if(!re)
			{
				return NotFound();
			}
			return Ok("Sub-Category deleted");
		}
	}
}
