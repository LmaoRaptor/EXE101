using EXE_Data.Data;
using EXE_Data.Data.Entity;

namespace EXE_Data.Infrastructure.Repositories
{
    public class CategoryRepository : BaseRepository<Category, AppDBContext>
    {
        public CategoryRepository(AppDBContext dbContext) : base(dbContext)
        {

        }
    }
}
