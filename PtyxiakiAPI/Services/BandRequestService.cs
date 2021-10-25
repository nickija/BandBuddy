using PtyxiakiAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PtyxiakiAPI.Services
{
    public class BandRequestService : IBasicService<BandRequest>
    {
        private readonly ApplicationContext _context;

        public BandRequestService(ApplicationContext context)
        {
            _context = context;
        }

        public BandRequest Delete()
        {
            throw new NotImplementedException();
        }

        public BandRequest GetSingle()
        {
            throw new NotImplementedException();
        }

        public BandRequest Persist()
        {
            throw new NotImplementedException();
        }

        public IEnumerable<BandRequest> Query()
        {
            throw new NotImplementedException();
        }
    }
}
