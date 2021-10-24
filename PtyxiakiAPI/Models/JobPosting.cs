using PtyxiakiAPI.Models.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PtyxiakiAPI.Models
{
    public class JobPosting
    {
        [Key]
        public Guid Id { get; set; }

        [Column(TypeName = "navchar(100)")]
        public string GenrePlayed { get; set; }

        [Column(TypeName = "navchar(100)")]
        public string InstrumentRequired { get; set; }

        public List<Musician> Musician { get; set; }

        public SkillEnum Skill { get; set; }

        public AreaEnum Area { get; set; }

        public bool IsActive { get; set; }

        public DateTime CreatedAt { get; set; }

        public DateTime UpdatedAt { get; set; }

    }
}

