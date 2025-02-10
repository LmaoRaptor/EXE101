using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EXE_Bussiness.Model.PostModel
{
    public class PostUpdateRequest
    {
        public string? Title { get; set; }
        public string? Description { get; set; }
        public decimal Price { get; set; }
        public string? SubCategoryId { get; set; }
    }
}
