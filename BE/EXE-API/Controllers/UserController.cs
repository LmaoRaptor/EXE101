using EXE_Bussiness.Model.UserModel;
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
		public async Task<IActionResult> AddRoles(string email)
		{
			var id = _context.Users.FirstOrDefault(x => x.Email == email).Id;
			await _userService.UpgradeAccount(id);
			return Ok("Done");
		}

		// POST api/<UserController>
		[HttpPost("role")]
		public async Task<IActionResult> AddRole([FromBody] string value)
		{
			await _userService.AddRole(value);
			return Ok("Done");
		}

		// PUT api/<UserController>/5
		[HttpPost("add-to-role")]
		public async Task<IActionResult> AddToRole([FromBody]AddUserToRoleRequest req)
		{
			var result = await _userService.AddUserToRole(req.RoleName, req.Email);
			return Ok(result);
		}

		// DELETE api/<UserController>/5
		//[HttpDelete("{id}")]
		//public void Delete(int id)
		//{

		//}
	}
}
