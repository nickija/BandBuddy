using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PtyxiakiAPI.Models
{
    public class JobPostingMusician
    {
        public Guid JobPostingId { get; set; }
        public Guid MusicianId { get; set; }

        public JobPostingMusician(Guid jobPostingId, Guid musicianId)
        {
            JobPostingId = jobPostingId;
            MusicianId = musicianId;
        }
        public JobPostingMusician()
        {

        }
    }
}
