using EXE_Data.Data;
using EXE_Data.Data.Entity;

namespace EXE_Data.Infrastructure.Repositories
{
    public class SubCategoryRepository : BaseRepository<SubCategory, AppDBContext>
    {
        public SubCategoryRepository(AppDBContext dbContext) : base(dbContext)
        {
        }
    }
}
