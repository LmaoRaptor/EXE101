﻿namespace EXE_Bussiness.Model.PostModel
{
    public class PostCreateRequest
    {
        public string? Title { get; set; }
        public string? Description { get; set; }
        public decimal Price { get; set; }
        public string? SubCategoryId { get; set; }
        public string? UserId { get; set; }
    }
}
