using AutoMapper;
using EXE_Bussiness.Model;
using EXE_Bussiness.Model.PostModel;
using EXE_Bussiness.Model.UserModel;
using EXE_Bussiness.Service.ImageService;
using EXE_Data.Data;
using EXE_Data.Data.Entity;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;

namespace EXE_Bussiness.Service.PostService
{
	public class PostService : IPostService
	{
		private readonly AppDBContext _context;
		private readonly IMapper _mapper;
		private readonly ILogger<PostService> _logger;
		private readonly IImageService _imageSerivce; 
		private readonly UserManager<User> _userManager;

		public PostService(AppDBContext context, IMapper mapper, ILogger<PostService> logger, IImageService imageSerivce, UserManager<User> userManager)
		{
			_mapper = mapper;
			_context = context;
			_logger = logger;
			_imageSerivce = imageSerivce;
			_userManager = userManager;
		}

		public async Task CreatePost(PostCreateRequest postCreate, User user)
		{
			var post = _mapper.Map<Post>(postCreate);
			var pid = Ulid.NewUlid();
			post.Id = pid;
			post.CreatedAt = DateTime.Now;
			post.UpdatedAt = post.CreatedAt;
			post.Status = EXE_Data.Data.EnumType.PostStatusEnum.New;
			var subCategory = await _context.SubCategories.FindAsync(Ulid.Parse(postCreate.SubCategoryId));
			post.CategoryId = subCategory.CategoryId;
			var role = await _userManager.GetRolesAsync(user);
			if(!role.Contains("pre1") || !role.Contains("pre2") || !role.Contains("pre3"))
			{
				user.IsSaler = false;
			}

			_context.Users.Update(user);
			_context.Posts.Add(post);
			var result = await _context.SaveChangesAsync() > 0;
			if(result)
			{
				_logger.LogInformation("Post created successfully");
			}
			else
			{
				_logger.LogError("Post creation failed");
			}
			if(!postCreate.Images.IsNullOrEmpty())
			{
				await _imageSerivce.AddRangeImage(postCreate.Images, pid);
			}
			else
			{
				_logger.LogWarning("No images to add for the post");
			}

		}

		public async Task<bool> DeletePost(Ulid id)
		{
			var post = await _context.Posts.FindAsync(id);
			if(post == null)
			{
				_logger.LogError("Post not found");
				return false;
			}
			_context.Posts.Remove(post);
			var result = await _context.SaveChangesAsync() > 0;
			if(result)
			{
				_logger.LogInformation("Post deleted successfully");
			}
			else
			{
				_logger.LogError("Post deletion failed");
			}
			return result;
		}

		public async Task<PagedResponse<PostListItem>> Filter(PostFilterRequest postFilter)
		{
			var posts = _context.Posts.Include(x => x.User).Include(x => x.SubCategory).Include(x => x.Images).Where(x => x.Status == EXE_Data.Data.EnumType.PostStatusEnum.New).AsQueryable();
			if(postFilter.SubCategoryId != null)
			{
				posts = posts.Where(x => x.SubCategoryId == Ulid.Parse(postFilter.SubCategoryId));
			}
			posts = Search(posts, postFilter.Search);
			posts = StatusFilter(posts, postFilter.Status);
			posts = PriceRange(posts, postFilter.MinPrice, postFilter.MaxPrice);
			if(postFilter.UserId != null)
			{
				posts = posts.Where(x => x.UserId == Ulid.Parse(postFilter.UserId));
			}
			posts = Sort(posts, postFilter.SortBy);
			int count = await posts.CountAsync();
			posts = posts.Skip((postFilter.Index - 1) * postFilter.PageSize).Take(postFilter.PageSize);
			List<PostListItem> list = _mapper.Map<List<PostListItem>>(posts);
			return new PagedResponse<PostListItem>
			{
				Data = list,
				PageIndex = postFilter.Index,
				PageSize = postFilter.PageSize,
				TotalCount = count
			};
		}

		public async Task<PostDetail> GetPostDetail(Ulid id)
		{
			_logger.LogInformation($"Fetching post details for ID: {id}");
			var post = _context.Posts
				.Include(x => x.User)
				.Include(x => x.SubCategory)
				.Include(x => x.Images)
				.FirstOrDefault(x => x.Id == id);

			if(post == null)
			{
				_logger.LogError("Post not found");
				return null;
			}

			if(post.Images.IsNullOrEmpty())
			{
				_logger.LogError("Cant get images");
			}

			var resultPost = _mapper.Map<PostDetail>(post);
			resultPost.User = _mapper.Map<UserDTO>(post.User);
			resultPost.Images = _mapper.Map<List<string>>(post.Images);
			return resultPost;
		}


		public async Task<IEnumerable<PostListItem>> GetPostList()
		{
			var post = await _context.Posts.Include(x => x.User).Include(x => x.SubCategory).Include(x => x.Images).Where(x => x.Status == EXE_Data.Data.EnumType.PostStatusEnum.New).ToListAsync();
			return _mapper.Map<IEnumerable<PostListItem>>(post);
		}

		public async Task<bool> UpdatePost(Ulid id, PostUpdateRequest postUpdate)
		{
			var post = await _context.Posts.FindAsync(id);
			if(post == null)
			{
				_logger.LogError("Post not found");
				return false;
			}
			post = _mapper.Map(postUpdate, post);

			Ulid subCategory;
			if(!Ulid.TryParse(postUpdate.SubCategoryId, out subCategory))
			{
				_logger.LogError($"ID: {postUpdate.SubCategoryId} not in format");
				return false;
			}
			var category = await _context.SubCategories.FindAsync(subCategory);
			if(category == null)
			{
				_logger.LogError("SubCategory not found");
				return false;
			}
			post.CategoryId = category.CategoryId;
			post.UpdatedAt = DateTime.Now;

			_context.Posts.Update(post);
			var result = await _context.SaveChangesAsync() > 0;
			if(result)
			{
				_logger.LogInformation("Post updated successfully");
			}
			else
			{
				_logger.LogError("Post update failed");
			}
			return result;
		}

		private IQueryable<Post> Sort(IQueryable<Post> posts, string sortBy)
		{
			return sortBy switch
			{
				"price" => posts.OrderBy(x => x.Price),
				"price_desc" => posts.OrderByDescending(x => x.Price),
				"created_at" => posts.OrderBy(x => x.CreatedAt),
				"created_at_desc" => posts.OrderByDescending(x => x.CreatedAt),
				_ => posts.OrderByDescending(x => x.CreatedAt)
			};
		}

		private IQueryable<Post> PriceRange(IQueryable<Post> posts, string min, string max)
		{
			decimal price;
			if(!string.IsNullOrWhiteSpace(max) && decimal.TryParse(max, out price))
			{
				posts = posts.Where(x => x.Price <= price);
			}
			if(string.IsNullOrWhiteSpace(min) && decimal.TryParse(min, out price))
			{
				posts = posts.Where(x => x.Price >= price);
			}
			return posts;
		}

		private IQueryable<Post> StatusFilter(IQueryable<Post> posts, string stt)
		{
			int status;
			if(string.IsNullOrWhiteSpace(stt) && int.TryParse(stt, out status))
			{
				posts = posts.Where(x => x.Status == (EXE_Data.Data.EnumType.PostStatusEnum)status);
			}
			return posts;
		}

		private IQueryable<Post> Search(IQueryable<Post> posts, string search)
		{
			if(!string.IsNullOrWhiteSpace(search))
			{
				posts = posts.Where(x =>
					x.Title.Contains(search) ||
					x.User.UserName.Contains(search) ||
					x.SubCategory.Name.Contains(search));
			}
			return posts;
		}
	}
}
