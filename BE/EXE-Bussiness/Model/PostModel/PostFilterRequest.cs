namespace EXE_Bussiness.Model.PostModel
{
    public class PostFilterRequest
    {
        public string? UserId { get; set; }
        public string? SubCategoryId { get; set; }
        public string? Status { get; set; }
        public string? Search { get; set; }
        public string? SortBy { get; set; }
        public string? MinPrice { get; set; }
        public string? MaxPrice { get; set; }

        private int index;
        public int Index
        {
            get { return index == 0 ? 1 : index; }
            set { index = value; }
        }

        private int pageSize;
        public int PageSize
        {
            get { return pageSize == 0 ? 20 : pageSize; }
            set { pageSize = value; }
        }

    }
}
