using EXE_Data.Data;
using EXE_Data.Data.Entity;

namespace EXE_Data.Infrastructure.Repositories
{
    public class ImageRepository : BaseRepository<Image, AppDBContext>
    {
        public ImageRepository(AppDBContext dbContext) : base(dbContext)
        {
        }
    }
}
