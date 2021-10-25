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

        [Column(TypeName = "nvarchar(100)")]
        public string BandName { get; set; }
    
        public string Summary { get; set; }

        public StatusEnum? Area { get; set; }

        public bool? IsActive { get; set; }

        public DateTime? CreatedAt { get; set; }

        public DateTime? UpdatedAt { get; set; }

    }
}
