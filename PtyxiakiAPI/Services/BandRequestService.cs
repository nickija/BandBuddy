using PtyxiakiAPI.Lookups;
using PtyxiakiAPI.Models;
using PtyxiakiAPI.Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace PtyxiakiAPI.Services
{
    public class BandRequestService : IBandRequestService
    {
        private readonly ApplicationContext _context;

        public BandRequestService(ApplicationContext context)
        {
            _context = context;
        }

        public async Task<bool> Delete(Guid id)
        {
            BandRequest existingBandRequest = _context.BandRequests.Where(u => u.Id == id).FirstOrDefault();

            existingBandRequest.IsActive = IsActive.Inactive;

            try
            {
                await _context.SaveChangesAsync();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public async Task<BandRequest> GetSingle(Guid id)
        {
            return _context.BandRequests.Where(u => u.Id == id).FirstOrDefault();
        }

        public async Task<BandRequest> Persist(BandRequest persistModel)
        {
            if (persistModel.Id == Guid.Empty)
            {
                persistModel.IsActive = IsActive.Active;
                persistModel.CreatedAt = DateTime.Now;
                persistModel.UpdatedAt = DateTime.Now;
                await _context.BandRequests.AddAsync(persistModel);
            }
            else if (persistModel.Id != Guid.Empty)
            {
                BandRequest existingBandRequest = _context.BandRequests.Where(u => u.Id == persistModel.Id).FirstOrDefault();

                existingBandRequest.Status = persistModel.Status;
                existingBandRequest.Summary = persistModel.Summary;
                existingBandRequest.UpdatedAt = DateTime.Now;
            }
            await _context.SaveChangesAsync();

            return persistModel;
        }

        public async Task<IEnumerable<BandRequest>> Query(Lookup<BandRequest> lookup)
        {
            if (lookup.Start == null) lookup.Start = 0;

            IQueryable<BandRequest> foundBandRequests = _context.BandRequests.Skip(lookup.Start.Value);

            if (lookup.Limit == null) lookup.Limit = 100;

            foundBandRequests = foundBandRequests.Take(lookup.Limit.Value);

            if (!String.IsNullOrWhiteSpace(lookup.Like)) foundBandRequests = foundBandRequests.Where(x => x.Musician.Education.Contains(lookup.Like) || x.Musician.Education.Contains(lookup.Like));

            if (lookup.IsActive != null && lookup.IsActive != IsActive.All) foundBandRequests = foundBandRequests.Where(u => u.IsActive == lookup.IsActive);

            return foundBandRequests;
        }

        public async Task<QueryResult<BandRequest>> GetQueryResult(Lookup<BandRequest> lookup)
        {
            int total = 0;

            total = _context.BandRequests.Count();
            if (lookup.Start == null) lookup.Start = 0;

            IQueryable<BandRequest> foundBandRequests = _context.BandRequests.Skip(lookup.Start.Value);

            if (lookup.Limit == null) lookup.Limit = 100;

            foundBandRequests = foundBandRequests.Take(lookup.Limit.Value);


            if (lookup.IsActive != null && lookup.IsActive != IsActive.All) foundBandRequests = foundBandRequests.Where(u => u.IsActive == lookup.IsActive);

            QueryResult<BandRequest> result = new QueryResult<BandRequest>()
            {
                Count = foundBandRequests.Count(),
                Total = total,
                Items = foundBandRequests
            };
            return result;
        }
    }
}
