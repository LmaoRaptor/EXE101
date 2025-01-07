namespace EXE_Data.Data.Entity
{
    public class Category
    {
        public Ulid Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public ICollection<SubCategory>? SubCategories { get; set; }
    }
}
