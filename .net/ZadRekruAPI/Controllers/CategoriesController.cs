using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ZadRekruAPI.Data;
using ZadRekruAPI.Models;

namespace ZadRekruAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoriesController : Controller
    {
        private readonly ZadRekruDbContext _zadRekruDbContext;

        public CategoriesController(ZadRekruDbContext zadRekruDbContext)
        {
            _zadRekruDbContext = zadRekruDbContext;
        }
        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetAllCategories()
        {   // pobranie wszystkich kategori
            var categories = await _zadRekruDbContext.Categories.ToListAsync();

            return Ok(categories);
        }

    }
}
