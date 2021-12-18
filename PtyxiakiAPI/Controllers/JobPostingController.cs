using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PtyxiakiAPI.Lookups;
using PtyxiakiAPI.Models;
using PtyxiakiAPI.Models.Request;
using PtyxiakiAPI.Services;
using PtyxiakiAPI.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PtyxiakiAPI.Controllers
{
    [Route("api/jobPosting")]
    [ApiController]
    public class JobPostingController : ControllerBase
    {
        private IJobPostingService _jobPostingService;

        public JobPostingController(IJobPostingService jobPostingService)
        {
            this._jobPostingService = jobPostingService;
        }

        [HttpPost("query")]
        public ActionResult<QueryResult<JobPosting>> Query(Lookup<JobPosting> lookup)
        {
            QueryResult<JobPosting> result = _jobPostingService.GetQueryResult(lookup).Result;
            return result;
        }

        [HttpGet("getSingle/{id}")]
        public ActionResult<JobPostingVM> Get(Guid id)
        {
            JobPostingVM jobPosting = _jobPostingService.GetSingleVM(id).Result;
            return jobPosting;
        }

        [HttpPost("persist")]
        [Authorize]
        public ActionResult<JobPosting> Persist(JobPosting persistModel)
        {
            JobPosting jobPosting = _jobPostingService.Persist(persistModel).Result;
            return jobPosting;
        }

        [HttpDelete("delete/{id}")]
        [Authorize]
        public ActionResult<Boolean> Delete(Guid id)
        {
            Boolean result = _jobPostingService.Delete(id).Result;
            return result;
        }

        [HttpPost("applyJobPosting")]
        [Authorize]
        public ActionResult<Boolean> ApplyJobPosting(JobPostingRequest jobPostingRequest)
        {
            Boolean result = _jobPostingService.ApplyToJob(jobPostingRequest).Result;
            return result;
        }

        [HttpGet("getJobPostingsByMusician/{id}")]
        [Authorize]
        public ActionResult<List<JobPosting>> GetJobPostingsByMusician(Guid id)
        {
            List<JobPosting> jobPostings = _jobPostingService.GetJobPostingOfSpecificMusician(id).Result;
            return jobPostings;
        }

        [HttpGet("getMusiciansByJobPosting/{id}")]
        [Authorize]
        public ActionResult<List<Musician>> GetMusiciansByJobPosting(Guid id)
        {
            List<Musician> musicians = _jobPostingService.GetMusiciansOfSpecificJobPosting(id).Result;
            return musicians;
        }
    }
}
