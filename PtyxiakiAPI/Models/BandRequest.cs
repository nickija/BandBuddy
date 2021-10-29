using PtyxiakiAPI.Models.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PtyxiakiAPI.Models
{
    public class BandRequest
    {
        [Key]
        public Guid Id { get; set; }

        public Guid BandId { get; set; }
        [ForeignKey("BandId")]
        public Band Band { get; set; }

        public Guid MusicianId { get; set; }
        [ForeignKey("MusicianId")]
        public Musician Musician { get; set; }

        public string Summary { get; set; }

        public StatusEnum? Status { get; set; }

        public bool? IsActive { get; set; }

        public DateTime? CreatedAt { get; set; }

        public DateTime? UpdatedAt { get; set; }

    }
}
