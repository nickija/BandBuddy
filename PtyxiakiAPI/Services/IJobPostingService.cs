using PtyxiakiAPI.Lookups;
using PtyxiakiAPI.Models;
using PtyxiakiAPI.Models.Request;
using PtyxiakiAPI.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PtyxiakiAPI.Services
{
    public interface IJobPostingService : IBasicService<JobPosting>
    {
        public Task<Boolean> ApplyToJob(JobPostingRequest jobPostingRequest);
        public Task<JobPostingVM> GetSingleVM(Guid id);
        public Task<List<Musician>> GetMusiciansOfSpecificJobPosting(Guid jobPostingId);
        public Task<List<JobPosting>> GetJobPostingOfSpecificMusician(Guid musicianId);

    }
}
