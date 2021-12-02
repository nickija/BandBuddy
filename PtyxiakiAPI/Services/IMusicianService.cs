using PtyxiakiAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PtyxiakiAPI.Services
{
    public interface IMusicianService : IBasicService<Musician>
    {
        Task<Musician> GetByUserId(Guid id);
    }
}
