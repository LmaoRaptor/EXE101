using EXE_Data.Data;
using EXE_Data.Data.Entity;
using EXE_Data.Data.EnumType;
using Microsoft.EntityFrameworkCore;

namespace EXE_Data.Infrastructure.Repositories
{
    public class PostRepository : BaseRepository<Post, AppDBContext>
    {
        public PostRepository(AppDBContext dbContext) : base(dbContext)
        {

        }

        public virtual void Delete(Post entity, bool isHardDelete = false)
        {
            entity.Status = PostStatusEnum.Deleted;
            dbset.Update(entity);
        }

        public virtual void Delete(Ulid id)
        {
            var entity = dbset.Find(id);
            if(entity != null)
            {
                entity.Status = PostStatusEnum.Deleted;
                dbset.Update(entity);
            }
        }
    }
}
