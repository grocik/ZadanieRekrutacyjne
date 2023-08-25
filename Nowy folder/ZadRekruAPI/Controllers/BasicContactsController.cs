using Microsoft.AspNetCore.Mvc;
using ZadRekruAPI.Data;


namespace ZadRekruAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BasicContactsController : Controller
    {
        private readonly ZadRekruDbContext _zadRekruDbContext;
        public BasicContactsController(ZadRekruDbContext zadRekruDbContext)
        {
            _zadRekruDbContext = zadRekruDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetBasicContacts()
        {
            // zaciągnięcie tylko podstawowych danych kontaktu
            var SelectBasicContactData = _zadRekruDbContext.Contacts.Select(p => new
            {
                p.ContactId,
                p.Name,
                p.Surename,
                p.Category,
                p.subcategory

            }).ToList();

            return Ok(SelectBasicContactData);


        }
    }
}
