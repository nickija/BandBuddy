using PtyxiakiAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PtyxiakiAPI.Services
{
    public class BandService : IBasicService<Band>
    {
        private readonly ApplicationContext _context;

        public BandService(ApplicationContext context)
        {
            _context = context;
        }

        public Band Delete()
        {
            throw new NotImplementedException();
        }

        public Band GetSingle()
        {
            throw new NotImplementedException();
        }

        public Band Persist()
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Band> Query()
        {
            throw new NotImplementedException();
        }
    }
}
