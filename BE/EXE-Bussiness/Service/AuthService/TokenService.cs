using EXE_Data.Data.Entity;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Text.Json;

namespace EXE_Bussiness.Service.TokenService
{
    public class TokenService : ITokenService
    {
        private readonly UserManager<User> _userManager;
        private readonly IConfiguration _configuration;

        public TokenService(UserManager<User> userManager, IConfiguration configuration)
        {
            _userManager = userManager;
            _configuration = configuration;
        }
        public async Task<JwtSecurityToken> CreateTokenAsync(User user)
        {
            var roles = await _userManager.GetRolesAsync(user);
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.UserName),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            };
            claims.AddRange(roles.Select(role => new Claim(ClaimTypes.Role, role)));
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(
                    issuer : _configuration["Jwt:Issuer"],
                    audience : _configuration["Jwt:Audience"],
                    claims: claims,
                    signingCredentials: credentials,
                    expires: DateTime.UtcNow.AddMinutes(5)
                    );
            return token;
        }
        public string GetSerializeObject(object value)
        {
            var serializeOptions = new JsonSerializerOptions
            {
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
                WriteIndented = false

            };
            return value != null ? JsonSerializer.Serialize(value, serializeOptions) : string.Empty;
        }

        public string CreateRefreshToken()
        {
            var randomNumber = new byte[64];
            using var gen = RandomNumberGenerator.Create();
            gen.GetBytes(randomNumber);
            return Convert.ToBase64String(randomNumber);
        }

        public ClaimsPrincipal GetClaimsPrincipalFromExpiredToken(string token)
        {
            var valid = new TokenValidationParameters
            {
                ValidIssuer = _configuration["Jwt:Issuer"],
                ValidAudience = _configuration["Jwt:Audience"],
                ValidateLifetime = false,
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]
                    ?? throw new InvalidOperationException("Key not found"))),
            };
            return new JwtSecurityTokenHandler().ValidateToken(token, valid, out _);
        }
    }


}
