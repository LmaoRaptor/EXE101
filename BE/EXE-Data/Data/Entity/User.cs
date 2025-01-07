using EXE_Data.Data.EnumType;
using Microsoft.AspNetCore.Identity;

namespace EXE_Data.Data.Entity
{
    public class User : IdentityUser<Ulid>
    {
        public UserStatusEnum Status { get; set; }
        public int Level { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public ICollection<Post>? Posts { get; set; }
    }
}
