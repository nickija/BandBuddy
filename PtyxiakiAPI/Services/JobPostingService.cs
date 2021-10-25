using PtyxiakiAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PtyxiakiAPI.Services
{
    public class JobPostingService : IBasicService<JobPosting>
    {
        private readonly ApplicationContext _context;

        public JobPostingService(ApplicationContext context)
        {
            _context = context;
        }

        public JobPosting Delete()
        {
            throw new NotImplementedException();
        }

        public JobPosting GetSingle()
        {
            throw new NotImplementedException();
        }

        public JobPosting Persist()
        {
            throw new NotImplementedException();
        }

        public IEnumerable<JobPosting> Query()
        {
            throw new NotImplementedException();
        }
    }
}
