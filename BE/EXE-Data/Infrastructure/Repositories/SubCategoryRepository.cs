using EXE_Data.Data;
using EXE_Data.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EXE_Data.Infrastructure.Repositories
{
    public class SubCategoryRepository : BaseRepository<SubCategory, AppDBContext>
    {
        public SubCategoryRepository(AppDBContext dbContext) : base(dbContext)
        {
        }
    }
}
