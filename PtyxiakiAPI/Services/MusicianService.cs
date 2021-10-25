using PtyxiakiAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PtyxiakiAPI.Services
{
    public class MusicianService : IBasicService<Musician>
    {
        private readonly ApplicationContext _context;

        public MusicianService(ApplicationContext context)
        {
            _context = context;
        }

        public Musician Delete()
        {
            throw new NotImplementedException();
        }

        public Musician GetSingle()
        {
            throw new NotImplementedException();
        }

        public Musician Persist()
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Musician> Query()
        {
            throw new NotImplementedException();
        }
    }
}
