using EXE_Bussiness.Model.PostModel;
using EXE_Data.Infrastructure;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EXE_Bussiness.Service.PostService
{
    public class PostService : IPostService
    {
        private readonly IUnitOfWork _unitOfWork;

        public PostService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public IEnumerable<PostDTO> Filter(PostFilter postFilter)
        {
            var posts = _unitOfWork.PostRepository.GetQuery().Include(x => x.User).Include(x => x.SubCategory).AsQueryable();
            if (postFilter.SubCategoryId != null)
            {
                posts = posts.Where(x => x.SubCategoryId == Ulid.Parse(postFilter.SubCategoryId));
            }
            if (postFilter.Search != null)
            {
                posts = posts.Where(x => 
                    x.Title.Contains(postFilter.Search) || 
                    x.User.UserName.Contains(postFilter.Search) || 
                    x.SubCategory.Name.Contains(postFilter.Search));
            }
            int status;
            if (postFilter.Status != null && int.TryParse(postFilter.Status, out status))
            {
                posts = posts.Where(x => x.Status == (EXE_Data.Data.EnumType.PostStatusEnum)status);
            }
            decimal price;
            if (postFilter.MaxPrice != null && decimal.TryParse(postFilter.MaxPrice, out price))
            {
                posts = posts.Where(x => x.Price <= price);
            }
            if (postFilter.MinPrice != null && decimal.TryParse(postFilter.MinPrice, out price))
            {
                posts = posts.Where(x => x.Price >= price);
            }
            if (postFilter.UserId != null)
            {
                posts = posts.Where(x => x.UserId == Ulid.Parse(postFilter.UserId));
            }
            posts = posts.Skip((postFilter.Index-1)*10).Take(10);
            
            List<PostDTO> list = new List<PostDTO>();
            foreach (var post in posts.ToList() )
            {
                list.Add(post.ToDTO());
            }
            return list;
        }
    }
}
