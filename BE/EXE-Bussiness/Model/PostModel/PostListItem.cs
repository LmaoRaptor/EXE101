namespace EXE_Bussiness.Model.PostModel
{
    public class PostListItem
    {
        public string Id { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public decimal Price { get; set; }
        public string? Status { get; set; }
        public string? SubCategoryName { get; set; }
        public string? MainImage { get; set; }
        public string? CreatedAt { get; set; }
    }
}
