using EXE_Data.Data;
using EXE_Data.Data.Entity;

namespace EXE_Data.Infrastructure.Repositories
{
    public class RoleRepository : BaseRepository<Role, AppDBContext>
    {
        public RoleRepository(AppDBContext dbContext) : base(dbContext)
        { }
    }
}
