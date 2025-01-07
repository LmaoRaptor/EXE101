using EXE_Data.Data;
using EXE_Data.Data.Entity;
using EXE_Data.Infrastructure.Repositories;

namespace EXE_Data.Infrastructure
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly AppDBContext _appDbContext;
        public UnitOfWork(AppDBContext appDbContext)
        {
            _appDbContext = appDbContext;
        }
        private IBaseRepository<User> _userRepository;
        public IBaseRepository<User> UserRepository => _userRepository ??= new UserRepository(_appDbContext);

        private IBaseRepository<Role> _roleRepository;
        public IBaseRepository<Role> RoleRepository => _roleRepository ??= new RoleRepository(_appDbContext);

        private IBaseRepository<Post> _postRepository;
        public IBaseRepository<Post> PostRepository => _postRepository ??= new PostRepository(_appDbContext);

        private IBaseRepository<Image> _imageRepository;
        public IBaseRepository<Image> ImageRepository => _imageRepository ??= new ImageRepository(_appDbContext);

        private IBaseRepository<Category> _categoryRepository;
        public IBaseRepository<Category> CategoryRepository => _categoryRepository ??= new CategoryRepository(_appDbContext);

        private IBaseRepository<SubCategory> _subCategoryRepository;
        public IBaseRepository<SubCategory> SubCategoryRepository => _subCategoryRepository ??= new SubCategoryRepository(_appDbContext);


        public void Dispose()
        {
            _appDbContext.Dispose();
        }

        public IBaseRepository<T> GenericRepository<T>() where T : class
        {
            throw new NotImplementedException();
        }

        public int SaveChanges()
        {
            return _appDbContext.SaveChanges();
        }

        public Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            return _appDbContext.SaveChangesAsync();
        }
    }
}
