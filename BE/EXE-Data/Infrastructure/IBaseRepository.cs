using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace EXE_Data.Infrastructure
{
    public interface IBaseRepository<T> where T : class
    {
        void Add(T entity);
        void Add(IEnumerable<T> entities);
        Task AddAsync(T entity);
        Task AddAsync(IEnumerable<T> entities);
        void Update(T entity);
        void Update(List<T> entity);
        void Delete(T entity, bool isHardDelete = false);
        void Delete(Ulid id);
        void Delete(Expression<Func<T, bool>> where, bool isHardDelete = false);
        IQueryable<T> GetQuery();
        IQueryable<T> GetQuery(Expression<Func<T, bool>> where);
        T GetById(Ulid Id);
        Task<T?> GetByIdAsync(Ulid id);

    }
}
