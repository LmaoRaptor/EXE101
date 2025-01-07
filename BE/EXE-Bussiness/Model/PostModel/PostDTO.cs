using EXE_Data.Data.Entity;
using EXE_Data.Data.EnumType;
using EXE_Data.Extensions;
using System.Runtime.Serialization;

namespace EXE_Bussiness.Model.PostModel
{
    public class PostDTO
    {
        public string? Id { get; set; }
        public string Title { get; set; }
        public string Price { get; set; }
        public string Description { get; set; }
        public string Status { get; set; }
        public string? CreatedAt { get; set; }
        public string? UpdatedAt { get; set; }
        public string UserId { get; set; }
        public string SubCategoryId { get; set; }
    }

    public static class PostDTOExtension
    {
        public static PostDTO ToDTO(this Post post)
        {
            return new PostDTO
            {
                Id = post.Id.ToString(),
                Title = post.Title,
                Price = post.Price.ToString(),
                Description = post.Description,
                Status = post.Status.GetName(),
                UpdatedAt = post.UpdatedAt.ToString(),
                CreatedAt = post.CreatedAt.ToString(),
                UserId = post.UserId.ToString(),
                SubCategoryId = post.SubCategoryId.ToString()
            };
        }

        public static Post ToEntity(this PostDTO postDTO)
        {
            return new Post
            {
                Id = postDTO.Id==null?Ulid.NewUlid():Ulid.Parse(postDTO.Id),
                Title = postDTO.Title,
                Price = decimal.Parse(postDTO.Price),
                Description = postDTO.Description,
                Status = (PostStatusEnum)int.Parse(postDTO.Status),
                UserId = Ulid.Parse(postDTO.UserId),
                SubCategoryId = Ulid.Parse(postDTO.SubCategoryId)
            };
        }
    }
}
