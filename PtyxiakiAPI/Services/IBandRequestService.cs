using PtyxiakiAPI.Lookups;
using PtyxiakiAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PtyxiakiAPI.Services
{
    public interface IBandRequestService : IBasicService<BandRequest>
    {
        Task<Boolean> Apply(Guid bandId);
        Task<Boolean> Approve(Guid id);
        Task<Boolean> Reject(Guid id);
        Task<QueryResult<BandRequest>> RequestsOfMyBand(Lookup<BandRequest> lookup);
        Task<QueryResult<BandRequest>> BandRequestsMadeByMe(Lookup<BandRequest> lookup);
    }
}
