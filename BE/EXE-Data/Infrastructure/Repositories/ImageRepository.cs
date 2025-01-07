using EXE_Data.Data;
using EXE_Data.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EXE_Data.Infrastructure.Repositories
{
    public class ImageRepository : BaseRepository<Image, AppDBContext>
    {
        public ImageRepository(AppDBContext dbContext) : base(dbContext)
        {
        }
    }
}
