using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using ZadRekruAPI.Models;

namespace ZadRekruAPI.Data
{
    public class ZadRekruDbContext : DbContext
    {
        public ZadRekruDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Contact> Contacts { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<SubCategory> SubCategories { get; set; }
        public DbSet<User> Users { get; set; }

    }
}
