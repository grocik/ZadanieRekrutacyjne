using Microsoft.AspNetCore.Mvc;
using ZadRekruAPI.Data;
using ZadRekruAPI.Models;

namespace ZadRekruAPI.Controllers
{
    [Controller]
    [Route("api/[controller]")]
    public class RegisterController : Controller
    {
        private readonly ZadRekruDbContext _ZadRekruDbContext;

        public RegisterController(ZadRekruDbContext zadRekruDbContext)
        {
            this._ZadRekruDbContext = zadRekruDbContext;
        }

        [HttpPost]
        public async Task<IActionResult> Register([FromBody] User user)
        {
            user.Id = Guid.NewGuid();

            var userToCheck =  _ZadRekruDbContext.Users.SingleOrDefault(c =>
            c.Login == user.Login);

            //sprawdzenie czy istnieje taki użytkownik
            if (userToCheck != null)
            {
                return BadRequest("Name is asigned");
            }
            // walidacja  podstawowej złożoności hasła
            if(user.Password.Length < 8 && !user.Password.Any(char.IsUpper) && !user.Password.Any(char.IsLower) && !user.Password.Any(char.IsDigit))
            {
                return BadRequest("Incorrect Password");
            }
            else
            {
                user.Password = HashPassword(user.Password);
                await _ZadRekruDbContext.Users.AddAsync(user);
                await _ZadRekruDbContext.SaveChangesAsync();
                return Ok();
            }
            
        }

        //hashowanie hasła
        public static string HashPassword(string password)
        {
            return BCrypt.Net.BCrypt.HashPassword(password);
        }
    }
}
