using PtyxiakiAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PtyxiakiAPI.Services
{
    public interface IBandService : IBasicService<Band>
    {
        public Task<Boolean> AcceptApplicant(BandUser bandUser);
        public Task<List<User>> GetUsersOfSpecificBand(Guid bandId);
        public Task<List<Band>> GetBandOfSpecificUser(Guid userId);
    }
}
