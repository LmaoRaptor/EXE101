using AutoMapper;
using EXE_Bussiness.Model.AuthModel;
using EXE_Bussiness.Service.TokenService;
using EXE_Data.Data.Entity;
using EXE_Data.Data.EnumType;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;

namespace EXE_API.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	[Authorize]
	public class AuthController : ControllerBase
	{
		private readonly UserManager<User> _userManager;
		private readonly ITokenService _tokenService;
		//private readonly EmailHandler _emailHandler;
		private readonly IMapper _mapper;

		public AuthController(UserManager<User> userManager, ITokenService tokenService, IMapper mapper) : base()
		{
			_userManager = userManager;
			_tokenService = tokenService;
			_mapper = mapper;
			//_emailHandler = emailHandler;
		}

		[HttpPost]
		[Route("login")]
		[AllowAnonymous]
		public async Task<IActionResult> LoginAsync([FromBody] LoginRequest login)
		{
			if(!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}
			var user = await _userManager.FindByEmailAsync(login.Email);
			if(user == null || !await _userManager.CheckPasswordAsync(user, login.Password))
			{
				return Unauthorized("Email or password is wrong");
			}
			var token = await _tokenService.CreateTokenAsync(user);
			var refresh = _tokenService.CreateRefreshToken();
			var roles = await _userManager.GetRolesAsync(user);

			//user.RefreshToken = refresh;
			//user.TokenExpiry = DateTime.UtcNow.AddMonths(1);
			await _userManager.UpdateAsync(user);

			return Ok(new LoginResponse()
			{
				UserName = user.UserName,
				Role = roles.ToList(),
				Token = new JwtSecurityTokenHandler().WriteToken(token),
				Expired = (long)token.ValidTo.Subtract(DateTime.UtcNow).TotalSeconds,
				ExpiredAt = token.ValidTo,
				//RefreshToken = refresh
			});
			;
		}
		[HttpPost]
		[Route("register")]
		[AllowAnonymous]
		public async Task<IActionResult> RegisterAsync([FromBody] RegisterRequest register)
		{
			if(!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}
			var exist = await _userManager.FindByEmailAsync(register.Email);
			if(exist != null)
			{
				ModelState.AddModelError("error", "Email already exists");
				return BadRequest(ModelState);
			}
			var id = Ulid.NewUlid();
			var user = new User()
			{
				Id = id,
				UserName = $"user_{id.ToString().ToLower()}",
				Email = register.Email,
				CreatedAt = DateTime.Now,
				UpdatedAt = DateTime.Now,
				IsSaler = false,
				Level = 0,
				Status = UserStatusEnum.Active

			};
			var result = await _userManager.CreateAsync(user, register.Password);
			if(!result.Succeeded)
			{
				foreach(var error in result.Errors)
					ModelState.AddModelError("error", error.Description);
				return BadRequest(ModelState);
			}
			await _userManager.AddToRoleAsync(user, "User");
			return Ok();
		}


		//[HttpPost]
		//[Route("refresh")]
		//[Authorize]
		//public async Task<IActionResult> Refresh([FromBody] RefreshModel refreshModel)
		//{
		//    var principal = _tokenService.GetClaimsPrincipalFromExpiredToken(refreshModel.AccessToken);
		//    if(principal?.Identity?.Name is null)
		//        return Unauthorized("not found name");
		//    var user = await _userManager.FindByNameAsync(principal.Identity.Name);
		//    if(user is null || user.RefreshToken != refreshModel.RefreshToken || user.TokenExpiry < DateTime.UtcNow)
		//        return Unauthorized("not found user");
		//    var token = await _tokenService.CreateTokenAsync(user);
		//    var refresh = _tokenService.CreateRefreshToken();
		//    user.RefreshToken = refresh;
		//    await _userManager.UpdateAsync(user);

		//    return Ok(new LoginResponse()
		//    {
		//        JwtToken = new JwtSecurityTokenHandler().WriteToken(token),
		//        Expried = token.ValidTo,
		//        RefreshToken = refresh
		//    });

		//}

		[HttpPost]
		[Route("logout")]
		[Authorize]
		public async Task<IActionResult> Logout()
		{
			if(!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}
			var username = HttpContext.User.Identity?.Name;
			if(username is null)
				return Unauthorized();
			var user = await _userManager.FindByNameAsync(username);
			if(user is null)
				return Unauthorized();
			await _userManager.UpdateAsync(user);
			return Ok();
		}

		//[HttpPost]
		//[Route("forgot-pass")]
		//[AllowAnonymous]
		//public async Task<IActionResult> ForgotPass([FromBody] string email)
		//{
		//    if(!ModelState.IsValid || email == null)
		//    {
		//        return BadRequest(ModelState);
		//    }
		//    var user = await _userManager.FindByEmailAsync(email);
		//    if(user is null)
		//        return NotFound();
		//    var token = await _userManager.GeneratePasswordResetTokenAsync(user);
		//    var forgotPassLink = Url.Action(nameof(ChangePass), "auth", new { token, email = user.Email }, Request.Scheme);
		//    await _emailHandler.SendEmailAsync(user.Email, forgotPassLink);
		//    return Ok(new String($"{token}"));
		//}

		//[HttpPost]
		//[Route("reset-pass")]
		//[AllowAnonymous]
		//public async Task<IActionResult> ChangePass([FromBody] ResetPasswordModel resetPassword)
		//{
		//    if(!ModelState.IsValid)
		//    {
		//        return BadRequest(ModelState);
		//    }
		//    var user = await _userManager.FindByEmailAsync(resetPassword.Email);
		//    if(user is null)
		//        return NotFound();
		//    var result = await _userManager.ResetPasswordAsync(user, resetPassword.Token, resetPassword.Password);
		//    if(!result.Succeeded)
		//    {
		//        foreach(var error in result.Errors)
		//            ModelState.AddModelError(string.Empty, error.Description);
		//        return BadRequest(ModelState);
		//    }
		//    return Ok();
		//}
		[HttpGet]
		[Route("get-something")]
		[Authorize]
		public async Task<IActionResult> GetSomething()
		{
			if(!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}
			var s = new String("GetSomething");
			return Ok(s);
		}
	}
}

