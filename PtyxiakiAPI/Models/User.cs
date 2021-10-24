using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PtyxiakiAPI.Models
{
    public class User
    {
        [Key]
        public Guid Id { get; set; }

        [Column(TypeName ="navchar(100)")]
        public string Username { get; set; }

        [Column(TypeName = "navchar(100)")]
        public string Password { get; set; }

        [Column(TypeName = "navchar(100)")]
        public string FirstName { get; set; }

        [Column(TypeName = "navchar(100)")]
        public string LastName { get; set; }

        public RoleEnum Role { get; set; }

        public bool IsActive { get; set; }

        public DateTime CreatedAt { get; set; }

        public DateTime UpdatedAt { get; set; }

    }
}
