using PtyxiakiAPI.Models.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PtyxiakiAPI.Models
{
    public class DeleteRequest
    {
        [Key]
        public Guid Id { get; set; }

        public Guid BandId { get; set; }
        [ForeignKey("BandId")]
        public Band Band { get; set; }

        public string Reason { get; set; }

        public StatusEnum Area { get; set; }

        public bool IsActive { get; set; }

        public DateTime CreatedAt { get; set; }

        public DateTime UpdatedAt { get; set; }
    }
}
