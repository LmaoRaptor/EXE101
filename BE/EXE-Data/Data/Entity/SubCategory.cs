namespace EXE_Data.Data.Entity
{
    public class SubCategory
    {
        public Ulid Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public Ulid CategoryId { get; set; }
        public Category? Category { get; set; }
        public ICollection<Post>? Posts { get; set; }
    }
}
