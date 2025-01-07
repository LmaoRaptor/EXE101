using System.Linq.Expressions;

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
        IQueryable<T> GetQuery(Expression<Func<T, bool>> where);
        T GetById(Ulid Id);
        Task<T?> GetByIdAsync(Ulid id);
        IEnumerable<T> GetAll();

    }
}
