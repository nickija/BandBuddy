using PtyxiakiAPI.Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PtyxiakiAPI.Models
{
    public class BandUser
    {
        public Guid BandId { get; set; }
        public Guid UserId { get; set; }

        public IsActive? IsActive { get; set; }

        public DateTime? CreatedAt { get; set; }

        public DateTime? UpdatedAt { get; set; }

        public BandUser(Guid bandId, Guid userId)
        {
            this.CreatedAt = DateTime.Now;
            this.UpdatedAt = DateTime.Now;
            this.BandId = bandId;
            this.UserId = userId;
            this.IsActive = IsActive;
        }
        public BandUser(BandUser bandUser)
        {
            this.CreatedAt = DateTime.Now;
            this.UpdatedAt = DateTime.Now;
            this.BandId = bandUser.BandId;
            this.UserId = bandUser.UserId;
            this.IsActive = 0;
        }


        public BandUser()
        {

        }
    }
}
