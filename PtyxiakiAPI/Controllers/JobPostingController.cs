using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PtyxiakiAPI.Lookups;
using PtyxiakiAPI.Models;
using PtyxiakiAPI.Services;
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
        public ActionResult<JobPosting> Get(Guid id)
        {
            JobPosting jobPosting = _jobPostingService.GetSingle(id).Result;
            return jobPosting;
        }

        [HttpPost("persist")]
        public ActionResult<JobPosting> Persist(JobPosting persistModel)
        {
            JobPosting jobPosting = _jobPostingService.Persist(persistModel).Result;
            return jobPosting;
        }

        [HttpDelete("delete/{id}")]
        public ActionResult<Boolean> Delete(Guid id)
        {
            Boolean result = _jobPostingService.Delete(id).Result;
            return result;
        }
    }
}
