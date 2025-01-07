namespace EXE_Data.Data.Entity
{
    public class Image
    {
        public Ulid Id { get; set; }
        public string? Path { get; set; }
        public Ulid PostId { get; set; }
        public Post? Post { get; set; }
    }
}
