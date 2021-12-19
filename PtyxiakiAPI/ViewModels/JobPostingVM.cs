using PtyxiakiAPI.Models;
using PtyxiakiAPI.Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PtyxiakiAPI.ViewModels
{
    public class JobPostingVM
    {
        public Guid Id { get; set; }

        public Guid? BandId { get; set; }

        public string GenrePlayed { get; set; }

        public string InstrumentRequired { get; set; }

        public List<Musician> Musician { get; set; } = new List<Musician>();

        public SkillEnum? Skill { get; set; }

        public AreaEnum? Area { get; set; }

        public IsActive? IsActive { get; set; }

        public DateTime? CreatedAt { get; set; }

        public DateTime? UpdatedAt { get; set; }
        public Boolean? IsApplied { get; set; }

        public JobPostingVM(JobPosting jobPosting)
        {
            this.Id = jobPosting.Id;
            this.BandId = jobPosting.BandId;
            this.GenrePlayed = jobPosting.GenrePlayed;
            this.InstrumentRequired = jobPosting.InstrumentRequired;
            this.Musician = jobPosting.Musician;
            this.Skill = jobPosting.Skill;
            this.Area = jobPosting.Area;
            this.IsActive = jobPosting.IsActive;
            this.CreatedAt = jobPosting.CreatedAt;
            this.UpdatedAt = jobPosting.UpdatedAt;
        }

        public JobPostingVM(JobPosting jobPosting,Boolean isApplied)
        {
            this.Id = jobPosting.Id;
            this.BandId = jobPosting.BandId;
            this.GenrePlayed = jobPosting.GenrePlayed;
            this.InstrumentRequired = jobPosting.InstrumentRequired;
            this.Musician = jobPosting.Musician;
            this.Skill = jobPosting.Skill;
            this.Area = jobPosting.Area;
            this.IsActive = jobPosting.IsActive;
            this.CreatedAt = jobPosting.CreatedAt;
            this.UpdatedAt = jobPosting.UpdatedAt;
            this.IsApplied = isApplied;
        }

        public JobPostingVM()
        {

        }
    }
}
