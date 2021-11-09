using PtyxiakiAPI.Lookups;
using PtyxiakiAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PtyxiakiAPI.Services
{
    public interface IJobPostingService : IBasicService<JobPosting>
    {
        Task<QueryResult<JobPosting>> GetQueryResult(Lookup<JobPosting> lookup);
    }
}
