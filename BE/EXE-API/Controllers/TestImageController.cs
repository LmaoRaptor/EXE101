using EXE_Data.Data;
using EXE_Data.Data.Entity;
using Microsoft.AspNetCore.Mvc;

namespace EXE_API.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class TestImageController : ControllerBase
	{
		private readonly AppDBContext _context;
		public TestImageController(AppDBContext context)
		{
			_context = context;
		}
		[HttpGet("auto-add")]
		public IActionResult AutoAddImage(string pid)
		{
			var id = Ulid.NewUlid();
			var image = new Image
			{
				Id = id,
				Path = $"Image-{id}",
				PostId = Ulid.Parse(pid)
			};
			_context.Images.Add(image);
			_context.SaveChanges();
			return Ok("Image added");
		}

		[HttpGet("all")]
		public IActionResult GetAllImages()
		{
			return Ok(_context.Images);
		}

		[HttpDelete("delete/{id}")]
		public IActionResult DeleteImage(string id)
		{
			var image = _context.Images.Find(Ulid.Parse(id));
			if(image == null)
			{
				return NotFound("Image not found");
			}
			_context.Images.Remove(image);
			_context.SaveChanges();
			return Ok("Image deleted");
		}

	}
}
