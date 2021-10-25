using PtyxiakiAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PtyxiakiAPI.Services
{
    public class UserService : IBasicService<User>
    {
        private readonly ApplicationContext _context;

        public UserService(ApplicationContext context)
        {
            _context = context;
        }

        public User Delete()
        {
            throw new NotImplementedException();
        }

        public User GetSingle()
        {
            throw new NotImplementedException();
        }

        public User Persist()
        {
            throw new NotImplementedException();
        }

        public IEnumerable<User> Query()
        {
            throw new NotImplementedException();
        }
    }
}

