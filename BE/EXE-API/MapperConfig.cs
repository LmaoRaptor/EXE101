using AutoMapper;
using EXE_Bussiness.Model.PostModel;
using EXE_Bussiness.Model.SubCategoryModel;
using EXE_Bussiness.Model.UserModel;
using EXE_Data.Data.Entity;
using EXE_Data.Extensions;
using Microsoft.IdentityModel.Tokens;

namespace EXE_API
{
	public class MapperConfig : Profile
	{
		public MapperConfig()
		{
			PostMapperConfig();
			SubCategoryMapperConfig();
			UserMapperConfig();
			CategoryMapperConfig();
			ImageMapperConfig();
		}

		public void PostMapperConfig()
		{
			CreateMap<Post, PostDetail>()
				.ForMember(dest => dest.SubCategoryName, opt => opt.MapFrom(src => src.SubCategory.Name))
				.ForMember(dest => dest.Status, opt => opt.MapFrom(src => src.Status.ToString()))
				.ForMember(dest => dest.CreatedAt, opt => opt.MapFrom(src => src.CreatedAt.ToPrint()))
				.ForMember(dest => dest.UpdatedAt, opt => opt.MapFrom(src => src.UpdatedAt.ToPrint()))
				.ReverseMap();
			CreateMap<Post, PostListItem>()
				.ForMember(dest => dest.SubCategoryName, opt => opt.MapFrom(src => src.SubCategory.Name))
				.ForMember(dest => dest.CreatedAt, opt => opt.MapFrom(src => src.CreatedAt.ToPrint()))
				.ForMember(dest => dest.MainImage, opt => opt.MapFrom(src => src.Images.IsNullOrEmpty() ? "1" : src.Images[0].Path))
				.ReverseMap();
			CreateMap<PostCreateRequest, Post>()
				.ForMember(dest => dest.UserId, opt => opt.MapFrom(src => Ulid.Parse(src.UserId)))
				.ForMember(dest => dest.SubCategoryId, opt => opt.MapFrom(src => Ulid.Parse(src.SubCategoryId)))
				.ForMember(dest => dest.Images, opt => opt.Ignore())
				.ReverseMap();
			CreateMap<PostUpdateRequest, Post>()
				.ForMember(dest => dest.SubCategoryId, opt => opt.MapFrom(src => Ulid.Parse(src.SubCategoryId)))
				.ForMember(dest => dest.Images, opt => opt.Ignore())
				.ReverseMap();
		}

		public void SubCategoryMapperConfig()
		{
			CreateMap<SubCategory, SubCategoryDTO>()
				.ReverseMap();
			CreateMap<SubCategory, SubCategoryCreateRequest>()
				.ReverseMap();
		}
		public void UserMapperConfig()
		{
			CreateMap<User, UserDTO>()
				.ReverseMap();
		}

		public void CategoryMapperConfig()
		{
			CreateMap<Category, CategoryDTO>()
				.ReverseMap();
		}

		public void ImageMapperConfig()
		{
			CreateMap<Image, string>()
				.ConvertUsing(src => src.Path);
		}

	}
}
