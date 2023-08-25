using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using ZadRekruAPI.Data;
using ZadRekruAPI.Models;

namespace ZadRekruAPI.Controllers
{
    [Controller]
    [Route("api/[controller]")]
    public class LoginController : Controller
    {
        private readonly ZadRekruDbContext _zadRekruDbContext;

        public LoginController(ZadRekruDbContext zadRekruDbContext)
        {
            _zadRekruDbContext = zadRekruDbContext;
        }

        [HttpPost]
        public IActionResult Login([FromBody] User user)
        {
            var userToCheck = _zadRekruDbContext.Users.SingleOrDefault(c =>
            c.Login == user.Login);

            // sprawdzenie czy hasło jest poprawne
            if (userToCheck == null || !VerifyPassword(user.Password,userToCheck.Password))
            {
                return BadRequest("Bad login or password");
            }

            //tworzenie tokenu jwt
            var SecretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("SuperSecret!23456"));
            var signingCredentials = new SigningCredentials(SecretKey,SecurityAlgorithms.HmacSha256);

            var tokenOptions = new JwtSecurityToken(
                issuer: "https://localhost:7142",
                audience: "https://localhost:7142",
                claims: new List<Claim>(),
                expires: DateTime.Now.AddMinutes(5),
                signingCredentials: signingCredentials
                );

            var token = new JwtSecurityTokenHandler().WriteToken(tokenOptions);
            return Ok(new { Token = token });
        }
 
        // metoda sprawdzająca zgodność haseł
        public static bool VerifyPassword(string password, string hashedPassword)
        {
            return BCrypt.Net.BCrypt.Verify(password, hashedPassword);
        }
    }
}
