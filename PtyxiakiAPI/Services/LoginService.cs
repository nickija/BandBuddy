using PtyxiakiAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PtyxiakiAPI.Services
{
    public class LoginService
    {
        private readonly ApplicationContext _context;

        public LoginService(ApplicationContext context)
        {
            _context = context;
        }

        public async Task<User> Authenticate(string username, string password)
        {
           return _context.Users.Where(u => u.Username == username && u.Password == password).FirstOrDefault();

        }
    }
}
