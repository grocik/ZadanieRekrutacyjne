using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ZadRekruAPI.Data;
using ZadRekruAPI.Models;

namespace ZadRekruAPI.Controllers
{
    [Controller]
    [Route("api/[controller]")]
    public class SubCategoriesController : Controller
    {
        private readonly ZadRekruDbContext _zadRekruDbContext;

        public SubCategoriesController(ZadRekruDbContext zadRekruDbContext)
        {
            _zadRekruDbContext = zadRekruDbContext;
        }

        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetAllSubCategories()
        {   //pobranie wszystkich podkategori
            var subCategories = await _zadRekruDbContext.SubCategories.ToListAsync();

            return Ok(subCategories);
        }
    }
}
