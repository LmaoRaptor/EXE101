using EXE_Bussiness.Model.PostModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EXE_Bussiness.Service.PostService
{
    public interface IPostService
    {
        IEnumerable<PostDTO> Filter(PostFilter postFilter);
    }
}
