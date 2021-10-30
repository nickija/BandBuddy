using PtyxiakiAPI.Models.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PtyxiakiAPI.Models
{
    public class Instrument
    {
        [Key]
        public Guid Id { get; set; }

        public Guid MusicianId { get; set; }
        [ForeignKey("MusicianId")]
        public Musician Musician { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string InstrumentType { get; set; }

        public int? YearsExperiecnce{ get; set; }

        public SkillEnum? Skill { get; set; }

        public IsActive? IsActive { get; set; }

        public DateTime? CreatedAt { get; set; }

        public DateTime? UpdatedAt { get; set; }
    }
}
