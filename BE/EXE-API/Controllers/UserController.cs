using EXE_Bussiness.Service.UserService;
using EXE_Data.Data;
using EXE_Data.Data.Entity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EXE_API.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	[Authorize(Policy = "Admin")]
	public class UserController : ControllerBase
	{
		IUserService _userService;
		AppDBContext _context;
		public UserController(IUserService userService, AppDBContext context)
		{
			_userService = userService;
			_context = context;
		}
		// GET: api/<UserController>
		[HttpGet]
		public async Task<IActionResult> GetAll()
		{
			return Ok(await _userService.GetAll());
		}

		[HttpGet("add-roles")]
		public async Task<IActionResult> AddRoles()
		{
			var users = _context.Users.ToList();
			foreach(var user in users)
			{
				var isdone = await _userService.UpgradeAccount(user.Id);
			}
			return Ok("Done");
		}

		// POST api/<UserController>
		[HttpPost]
		public void Post([FromBody] string value)
		{
		}

		// PUT api/<UserController>/5
		[HttpPut("{id}")]
		public void Put(int id, [FromBody] string value)
		{
		}

		// DELETE api/<UserController>/5
		[HttpDelete("{id}")]
		public void Delete(int id)
		{

		}
	}
}
