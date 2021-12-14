using PtyxiakiAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PtyxiakiAPI.Services
{
    public interface IUserService : IBasicService<User>
    {
        AuthenticateResponse Authenticate(AuthenticateRequest model);
    }
}
