using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EXE_Bussiness.Model.PostModel
{
    public class PostFilter
    {
        public string? UserId { get; set; }
        public string? SubCategoryId { get; set; }
        public string? Status { get; set; }
        public string? Search { get; set; }
        public string? SortBy { get; set; }
        public string? MinPrice { get; set; }
        public string? MaxPrice { get; set; }
        public int Index { get; set; }
    }
}
