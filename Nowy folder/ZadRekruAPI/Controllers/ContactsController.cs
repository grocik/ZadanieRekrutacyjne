using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ZadRekruAPI.Data;
using ZadRekruAPI.Models;

namespace ZadRekruAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactsController : Controller
    {
        private readonly ZadRekruDbContext _zadRekruDbContext;

        public ContactsController(ZadRekruDbContext zadRekruDbContext)
        {
            _zadRekruDbContext = zadRekruDbContext;
        }


        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetAllContacts()
        {   //pobranie wszystkich kontaktów
            var contacts = await _zadRekruDbContext.Contacts.ToListAsync();

            return Ok(contacts);
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> AddContact([FromBody] Contact ContactsRequest)
        {
            //stworzenie nowego id
            ContactsRequest.ContactId = Guid.NewGuid();
            //dodanie kontaktu
            await _zadRekruDbContext.Contacts.AddAsync(ContactsRequest);
            await _zadRekruDbContext.SaveChangesAsync();

            return Ok(ContactsRequest);
        }
        [HttpDelete]
        [Authorize]
        [Route("delete/{id:Guid}")]
        public async Task<IActionResult> DeleteContact([FromRoute] Guid id)
        {   
            //usunięcie kontaktu
            var contact = await _zadRekruDbContext.Contacts.FindAsync(id);

            if (contact == null)
            {
                return NotFound();
            }
            _zadRekruDbContext.Contacts.Remove(contact);
            await _zadRekruDbContext.SaveChangesAsync();

            return Ok();

        }
        [HttpGet]
        [Authorize]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetContact([FromRoute] Guid id)
        {
            //wyszukanie kontaktu po id
            var contact = await _zadRekruDbContext.Contacts.FirstOrDefaultAsync(x => x.ContactId == id);

            if (contact == null)
            {
                return NotFound();
            }

            return Ok(contact);
        }
        [HttpPut]
        [Authorize]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateContact([FromRoute] Guid id, [FromBody] Contact updatedContact)
        {   
            //aktualizacja kontaktu
            var contact = await _zadRekruDbContext.Contacts.FindAsync(id);

            if (contact == null)
            {
                return NotFound();
            }

            contact.Name = updatedContact.Name;
            contact.Surename = updatedContact.Surename;
            contact.Email = updatedContact.Email;
            contact.PhoneNumber = updatedContact.PhoneNumber;
            contact.BirthDate = updatedContact.BirthDate;
            contact.Category = updatedContact.Category;
            contact.subcategory = updatedContact.subcategory;

            await _zadRekruDbContext.SaveChangesAsync();

            return Ok(contact);
        }
    }
}
