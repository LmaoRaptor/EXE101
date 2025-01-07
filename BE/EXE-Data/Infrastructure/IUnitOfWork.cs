using EXE_Data.Data.Entity;

namespace EXE_Data.Infrastructure
{
    public interface IUnitOfWork : IDisposable
    {
        IBaseRepository<User> UserRepository { get; }
        IBaseRepository<Role> RoleRepository { get; }
        IBaseRepository<Post> PostRepository { get; }
        IBaseRepository<Image> ImageRepository { get; }
        IBaseRepository<Category> CategoryRepository { get; }
        IBaseRepository<SubCategory> SubCategoryRepository { get; }
        IBaseRepository<T> GenericRepository<T>() where T : class;
        int SaveChanges();
        Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
    }
}
