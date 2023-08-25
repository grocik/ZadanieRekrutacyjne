using System.Security.Policy;

namespace ZadRekruAPI.Models
{   
    //model do bazy danych
    public class User
    {
        public Guid Id { get; set; }

        public string Login { get; set; }

        public string Password { get; set; }
    }
}
