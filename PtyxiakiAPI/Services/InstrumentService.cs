using PtyxiakiAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PtyxiakiAPI.Services
{
    public class InstrumentService : IBasicService<Instrument>
    {
        private readonly ApplicationContext _context;

        public InstrumentService(ApplicationContext context)
        {
            _context = context;
        }

        public Instrument Delete()
        {
            throw new NotImplementedException();
        }

        public Instrument GetSingle()
        {
            throw new NotImplementedException();
        }

        public Instrument Persist()
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Instrument> Query()
        {
            throw new NotImplementedException();
        }
    }
}
