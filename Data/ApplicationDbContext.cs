using Microsoft.EntityFrameworkCore;

namespace Shopistik.Data
{
    /// <summary>
    /// The EF Core "bridge" between our C# Models and the SQL Server database.
    /// Once entity classes exist in /Models, expose them here as DbSet properties
    /// (e.g. public DbSet&lt;Product&gt; Products { get; set; }) so EF Core knows
    /// to create/query the corresponding tables.
    /// </summary>
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        // TODO: Add DbSet<T> properties here once Models are created, e.g.:
        // public DbSet<Product> Products { get; set; }
        // public DbSet<Category> Categories { get; set; }
    }
}
