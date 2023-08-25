using System.Diagnostics.CodeAnalysis;

namespace ZadRekruAPI.Models
{   
    //model do bazy danych
    public class Contact
    {
        public Guid ContactId { get; set; }
        public string Name { get; set; }
        public string Surename { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int PhoneNumber { get; set; }
        public DateTime BirthDate { get; set; }
        public string Category { get; set; }
        public string subcategory { get; set; }
    }
}
