using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PtyxiakiAPI.Models
{
    public class Band
    {
        [Key]
        public Guid Id { get; set; }

        public Guid OwnerId { get; set; }
        [ForeignKey("OwnerId")]
        public User User { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string BandName { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Genre { get; set; }

        public List<Musician> Musician { get; set; }

        public List<JobPosting> JobPosting { get; set; }

        public bool? IsActive { get; set; }

        public DateTime? CreatedAt { get; set; }

        public DateTime? UpdatedAt { get; set; }

        
    }
}

