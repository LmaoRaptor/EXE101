using System.ComponentModel.DataAnnotations;

namespace EXE_Bussiness.Model.AuthModel
{
    public class RegisterRequest
    {
        [Required]
        public string? Email { get; set; }
        [Required]
        public string? Password { get; set; }
        [Required]
        public string? ConfirmPassword { get; set; }
    }
}
