using EXE_Data.Data;
using EXE_Data.Data.Entity;

namespace EXE_Data.Infrastructure.Repositories
{
    public class UserRepository : BaseRepository<User, AppDBContext>
    {
        public UserRepository(AppDBContext dbContext) : base(dbContext)
        {

        }
    }
}
