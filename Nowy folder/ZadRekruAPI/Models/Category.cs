using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace ZadRekruAPI.Models
{   
    //model do bazy danych
    public class Category
    {
        public Guid CategoryId { get; set; }
        public string CategoryName { get; set; }
    }
}
