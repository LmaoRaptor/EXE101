using EXE_Data.Data.Entity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace EXE_Data.Data
{
    public class AppDBContext : IdentityDbContext<User, Role, Ulid>
    {
        public DbSet<Post> Posts { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<SubCategory> SubCategories { get; set; }
        public DbSet<Image> Images { get; set; }

        public AppDBContext(DbContextOptions options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            foreach(var entityType in builder.Model.GetEntityTypes())
            {
                foreach(var property in entityType.GetProperties())
                {
                    if(property.ClrType == typeof(Ulid))
                    {
                        property.SetValueConverter(new UlidToBytesConverter());
                    }
                }
            }


            builder.ApplyConfigurationsFromAssembly(typeof(Post).Assembly);
        }
    }
}
