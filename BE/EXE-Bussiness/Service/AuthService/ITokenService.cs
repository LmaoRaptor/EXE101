using EXE_Data.Data.Entity;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace EXE_Bussiness.Service.TokenService
{
    public interface ITokenService
    {
        Task<JwtSecurityToken> CreateTokenAsync(User user);

        string CreateRefreshToken();

        ClaimsPrincipal GetClaimsPrincipalFromExpiredToken(string token);

        string GetSerializeObject(object value);

    }
}
