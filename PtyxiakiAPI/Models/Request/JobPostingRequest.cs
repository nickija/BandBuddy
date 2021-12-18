using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PtyxiakiAPI.Models.Request
{
    public class JobPostingRequest
    {
        public Guid UserId { get; set; }

        public Guid JobPostingId { get; set; }
    }
}
