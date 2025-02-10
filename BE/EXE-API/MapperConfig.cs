using AutoMapper;
using EXE_Bussiness.Model.PostModel;
using EXE_Bussiness.Model.SubCategoryModel;
using EXE_Bussiness.Model.UserModel;
using EXE_Data.Data.Entity;
using EXE_Data.Extensions;

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
        }

        public void PostMapperConfig()
        {
            CreateMap<Post, PostDetail>()
                .ForMember(dest => dest.SubCategoryName, opt => opt.MapFrom(src => src.SubCategory.Name))
                .ForMember(dest => dest.Status, opt => opt.MapFrom(src => src.Status.ToString()))
                .ForMember(dest => dest.CreatedAt, opt => opt.MapFrom(src => src.CreatedAt.ToPrint()))
                .ForMember(dest => dest.UpdatedAt, opt => opt.MapFrom(src => src.UpdatedAt.ToPrint()))
                .ForMember(dest => dest.Images, opt => opt.MapFrom(src => src.Images))
                .ReverseMap();
            CreateMap<Post, PostListItem>()
                .ForMember(dest => dest.SubCategoryName, opt => opt.MapFrom(src => src.SubCategory.Name))
                .ForMember(dest => dest.CreatedAt, opt => opt.MapFrom(src => src.CreatedAt.ToPrint()))
                //.ForMember(dest => dest.MainImage, opt => opt.MapFrom(src => src.Images[0].Path))
                .ReverseMap();
            CreateMap<Post, PostCreateRequest>()
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

    }
}
