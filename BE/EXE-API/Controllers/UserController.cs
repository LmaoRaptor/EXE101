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

		[HttpGet("upgrade")]
		public async Task<IActionResult> AddRoles(string paymentId)
		{
			Ulid id;
			if(!Ulid.TryParse(paymentId, out id))
			{
				return BadRequest("Invalid payment id");
			}
			await _userService.UpgradeAccount(id);
			return Ok("Done");
		}

		[HttpGet("payment-list")]
		public async Task<IActionResult> PaymentList()
		{
			return Ok(await _userService.PaymentList());
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

		[HttpPost("request-update")]
		public async Task<IActionResult> CreateRequestUpdate([FromBody] UpgradeAccountRequest request)
		{
			return await _userService.CreateRequestUpdate(request) switch
			{
				1 => BadRequest("User not found"),
				2 => BadRequest("Role not found"),
				3 => BadRequest("Id not in format"),
				_ => Ok("Request created")
			};
		}

		// DELETE api/<UserController>/5
		//[HttpDelete("{id}")]
		//public void Delete(int id)
		//{

		//}
	}
}
