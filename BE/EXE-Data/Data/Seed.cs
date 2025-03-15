using EXE_Data.Data.Entity;
using Microsoft.AspNetCore.Identity;

namespace EXE_Data.Data
{
	public class DBSeedData
	{
		public static void Truncate(AppDBContext context)
		{
			context.Database.EnsureDeleted();
			context.Database.EnsureCreated();
		}
		public static void Seed(AppDBContext context, UserManager<User> userManager)
		{
			var admin = new User { Id = Ulid.NewUlid(), UserName = "admin", Email = "admin@gmail.com", PhoneNumber = "1234567890", CreatedAt = DateTime.Now, Level = 10, Status = EnumType.UserStatusEnum.Active };
			var vinh = new User { Id = Ulid.NewUlid(), UserName = "vinh", Email = "vinh@gmail.com", PhoneNumber = "1234567890", CreatedAt = DateTime.Now, Level = 1, Status = EnumType.UserStatusEnum.Active };
			var tien = new User { Id = Ulid.NewUlid(), UserName = "tien", Email = "tien@gmail.com", PhoneNumber = "1234567890", CreatedAt = DateTime.Now, Level = 2, Status = EnumType.UserStatusEnum.Active };
			var cuong = new User { Id = Ulid.NewUlid(), UserName = "cuong", Email = "cuong@gmail.com", PhoneNumber = "1234567890", CreatedAt = DateTime.Now, Level = 9, Status = EnumType.UserStatusEnum.Active };

			var roles = new List<Role>(){
				new Role { Id = Ulid.NewUlid(), Name = "Admin", NormalizedName = "ADMIN" },
				new Role { Id = Ulid.NewUlid(), Name = "User", NormalizedName = "USER" },
				new Role { Id = Ulid.NewUlid(), Name = "Pre1", NormalizedName = "PRE1" },
				new Role { Id = Ulid.NewUlid(), Name = "Pre2", NormalizedName = "PRE2" },
				new Role { Id = Ulid.NewUlid(), Name = "Pre3", NormalizedName = "PRE3" },
			};
			if(!context.Roles.Any())
			{
				context.Roles.AddRange(roles);
				context.SaveChanges();
			}
			if(!context.Users.Any())
			{
				userManager.CreateAsync(admin, "123").Wait();
				userManager.AddToRoleAsync(admin, "Admin").Wait();

				userManager.CreateAsync(vinh, "123").Wait();
				userManager.AddToRoleAsync(vinh, "User").Wait();

				userManager.CreateAsync(tien, "123").Wait();
				userManager.AddToRoleAsync(tien, "User").Wait();

				userManager.CreateAsync(cuong, "123").Wait();
				userManager.AddToRoleAsync(cuong, "User").Wait();
			}
			if(!context.Categories.Any())
			{
				context.Categories.AddRange(
				new Category
				{
					Id = Ulid.NewUlid(),
					Name = "Category 1",
					Description = "Description 1",
				},
				new Category
				{
					Id = Ulid.NewUlid(),
					Name = "Category 2",
					Description = "Description 2",
				},
				new Category
				{
					Id = Ulid.NewUlid(),
					Name = "Category 3",
					Description = "Description 3",
				});
				context.SaveChanges();
			}
			if(!context.SubCategories.Any())
			{
				List<SubCategory> subCategories = new List<SubCategory>(){
				new SubCategory
				{
					Id = Ulid.NewUlid(),
					Name = "SubCategory 4",
					Description = "Description 4",
					CategoryId = context.Categories.Skip(1).First().Id,
				},
				new SubCategory
				{
					Id = Ulid.NewUlid(),
					Name = "SubCategory 5",
					Description = "Description 5",
					CategoryId = context.Categories.Skip(1).First().Id,
				},
				new SubCategory
				{
					Id = Ulid.NewUlid(),
					Name = "SubCategory 6",
					Description = "Description 6",
					CategoryId = context.Categories.Skip(2).First().Id,
				},
				new SubCategory
				{
					Id = Ulid.NewUlid(),
					Name = "SubCategory 7",
					Description = "Description 7",
					CategoryId = context.Categories.Skip(2).First().Id,
				},
				new SubCategory
				{
					Id = Ulid.NewUlid(),
					Name = "SubCategory 8",
					Description = "Description 8",
					CategoryId = context.Categories.Skip(2).First().Id,
				},
				new SubCategory
				{
					Id = Ulid.NewUlid(),
					Name = "SubCategory 9",
					Description = "Description 9",
					CategoryId = context.Categories.Skip(1).First().Id,
				},

				new SubCategory
				{
					Id = Ulid.NewUlid(),
					Name = "SubCategory 10",
					Description = "Description 10",
					CategoryId = context.Categories.First().Id,
				},
				new SubCategory
				{
					Id = Ulid.NewUlid(),
					Name = "SubCategory 11",
					Description = "Description 11",
					CategoryId = context.Categories.First().Id,
				} };


				context.SubCategories.AddRange(subCategories);
				context.SaveChanges();
			}

			if(!context.Posts.Any())
			{
				List<Post> posts = new List<Post>(){
				new Post
				{
					Id = Ulid.NewUlid(),
					Title = "Post 1",
					Price = 100,
					Description = "Description 1",
					Status = EnumType.PostStatusEnum.New,
					CreatedAt = DateTime.Now,
					UpdatedAt = DateTime.Now,
					UserId = context.Users.FirstOrDefault().Id,
					CategoryId = context.Categories.First().Id,
					SubCategoryId = context.SubCategories.First().Id,
				},
				new Post
				{
					Id = Ulid.NewUlid(),
					Title = "Post 2",
					Price = 200,
					Description = "Description 2",
					Status = EnumType.PostStatusEnum.New,
					CreatedAt = DateTime.Now,
					UpdatedAt = DateTime.Now,
					UserId = context.Users.FirstOrDefault().Id,
					CategoryId = context.Categories.Skip(1).First().Id,
					SubCategoryId = context.SubCategories.Skip(3).First().Id,
				},
				new Post
				{
					Id = Ulid.NewUlid(),
					Title = "Post 3",
					Price = 300,
					Description = "Description 3",
					Status = EnumType.PostStatusEnum.New,
					CreatedAt = DateTime.Now,
					UpdatedAt = DateTime.Now,
					UserId = context.Users.Skip(1).FirstOrDefault().Id,
					CategoryId = context.Categories.Skip(2).First().Id,
					SubCategoryId = context.SubCategories.Skip(6).First().Id,
				},
				new Post
				{
					Id = Ulid.NewUlid(),
					Title = "Post 4",
					Price = 400,
					Description = "Description 4",
					Status = EnumType.PostStatusEnum.New,
					CreatedAt = DateTime.Now,
					UpdatedAt = DateTime.Now,
					UserId = context.Users.FirstOrDefault().Id,
					CategoryId = context.Categories.First().Id,
					SubCategoryId = context.SubCategories.Skip(2).First().Id,
				},
				new Post
				{
					Id = Ulid.NewUlid(),
					Title = "Post 5",
					Price = 500,
					Description = "Description 5",
					Status = EnumType.PostStatusEnum.New,
					CreatedAt = DateTime.Now,
					UpdatedAt = DateTime.Now,
					UserId = context.Users.Skip(2).FirstOrDefault().Id,
					CategoryId = context.Categories.Skip(1).First().Id,
					SubCategoryId = context.SubCategories.Skip(4).First().Id,
				},
				new Post
				{
					Id = Ulid.NewUlid(),
					Title = "Post 6",
					Price = 600,
					Description = "Description 6",
					Status = EnumType.PostStatusEnum.New,
					CreatedAt = DateTime.Now,
					UpdatedAt = DateTime.Now,
					UserId = context.Users.Skip(1).FirstOrDefault().Id,
					CategoryId = context.Categories.Skip(2).First().Id,
					SubCategoryId = context.SubCategories.Skip(7).First().Id,
				},
				new Post
				{
					Id = Ulid.NewUlid(),
					Title = "Post 7",
					Price = 700,
					Description = "Description 7",
					Status = EnumType.PostStatusEnum.New,
					CreatedAt = DateTime.Now,
					UpdatedAt = DateTime.Now,
					UserId = context.Users.FirstOrDefault().Id,
					CategoryId = context.Categories.First().Id,
					SubCategoryId = context.SubCategories.Skip(1).First().Id,
				},
				new Post
				{
					Id = Ulid.NewUlid(),
					Title = "Post 8",
					Price = 800,
					Description = "Description 8",
					Status = EnumType.PostStatusEnum.New,
					CreatedAt = DateTime.Now,
					UpdatedAt = DateTime.Now,
					UserId = context.Users.Skip(2).FirstOrDefault().Id,
					CategoryId = context.Categories.Skip(1).First().Id,
					SubCategoryId = context.SubCategories.Skip(5).First().Id,
				},
				new Post
				{
					Id = Ulid.NewUlid(),
					Title = "Post 9",
					Price = 900,
					Description = "Description 9",
					Status = EnumType.PostStatusEnum.New,
					CreatedAt = DateTime.Now,
					UpdatedAt = DateTime.Now,
					UserId = context.Users.Skip(1).FirstOrDefault().Id,
					CategoryId = context.Categories.Skip(2).First().Id,
					SubCategoryId = context.SubCategories.Skip(7).First().Id,
				},
				new Post
				{
					Id = Ulid.NewUlid(),
					Title = "Post 10",
					Price = 1000,
					Description = "Description 10",
					Status = EnumType.PostStatusEnum.New,
					CreatedAt = DateTime.Now,
					UpdatedAt = DateTime.Now,
					UserId = context.Users.FirstOrDefault().Id,
					CategoryId = context.Categories.First().Id,
					SubCategoryId = context.SubCategories.Skip(2).First().Id,
				} };

				context.Posts.AddRange(posts);
				context.SaveChanges();
			}
		}
	}
}
