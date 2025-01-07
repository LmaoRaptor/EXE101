using EXE_Data.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace EXE_Data.Infrastructure
{
    public class BaseRepository<T, TC> : IBaseRepository<T> where T : class where TC : AppDBContext
    {
        protected readonly TC context;
        protected readonly DbSet<T> dbset;
        public BaseRepository(TC dbContext)
        {
            this.context = dbContext;
            dbset = dbContext.Set<T>();
        }
        public void Add(T entity)
        {
            dbset.Add(entity);
        }

        public void Add(IEnumerable<T> entities)
        {
            dbset.AddRange(entities);
        }

        public async Task AddAsync(T entity)
        {
            await dbset.AddAsync(entity);
        }

        public async Task AddAsync(IEnumerable<T> entities)
        {
            await dbset.AddRangeAsync(entities);
        }

        public virtual void Delete(T entity, bool isHardDelete = false)
        {
            dbset.Remove(entity);
            context.Entry(entity).State = EntityState.Deleted;
        }

        public virtual void Delete(Ulid id)
        {
            var entity = dbset.Find(id);
            if(entity != null)
            {
                dbset.Remove(entity);
            }
        }

        public virtual void Delete(Expression<Func<T, bool>> where, bool isHardDelete = false)
        {
            var entites = GetQuery(where).AsEnumerable();
            foreach(var entity in entites)
            {
                Delete(entity);
            }
        }

        public virtual T GetById(Ulid Id)
        {
            return dbset.Find(Id);
        }

        public async Task<T?> GetByIdAsync(Ulid id)
        {
            return await dbset.FindAsync(id);
        }

        public IQueryable<T> GetQuery()
        {
            return dbset.AsQueryable();
        }

        public IQueryable<T> GetQuery(Expression<Func<T, bool>> where)
        {
            return dbset.Where(where).AsQueryable();
        }

        public virtual void Update(T entity)
        {
            context.Entry(entity).State = EntityState.Modified;
        }

        public void Update(List<T> entity)
        {
            entity.ForEach(e => Update(e));
        }
    }
}
