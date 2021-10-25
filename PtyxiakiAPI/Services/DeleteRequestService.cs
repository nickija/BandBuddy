using PtyxiakiAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PtyxiakiAPI.Services
{
    public class DeleteRequestService : IBasicService<DeleteRequest>
    {
        private readonly ApplicationContext _context;

        public DeleteRequestService(ApplicationContext context)
        {
            _context = context;
        }

        public DeleteRequest Delete()
        {
            throw new NotImplementedException();
        }

        public DeleteRequest GetSingle()
        {
            throw new NotImplementedException();
        }

        public DeleteRequest Persist()
        {
            throw new NotImplementedException();
        }

        public IEnumerable<DeleteRequest> Query()
        {
            throw new NotImplementedException();
        }
    }
}
