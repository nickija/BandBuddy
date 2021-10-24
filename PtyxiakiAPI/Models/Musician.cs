using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PtyxiakiAPI.Models
{
    public class Musician
    {
        [Key]
        public Guid Id { get; set; }

        public Guid UserId { get; set; }
        [ForeignKey("UserId")]
        public User User { get; set; }

        public List<string> Education { get; set; }

        public List<JobPosting> JobPosting { get; set; }

        public AreaEnum? Area { get; set; }

        public bool? IsActive { get; set; }

        public DateTime? CreatedAt { get; set; }

        public DateTime? UpdatedAt { get; set; }

    }
}

