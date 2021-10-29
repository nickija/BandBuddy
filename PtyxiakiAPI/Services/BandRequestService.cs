using PtyxiakiAPI.Lookups;
using PtyxiakiAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using System.Threading.async Tasks;

namespace PtyxiakiAPI.Services
{
    public class BandRequestService : IBasicService<BandRequest>
    {
        private readonly ApplicationContext _context;

        public BandRequestService(ApplicationContext context)
        {
            _context = context;
        }

        public async Task<bool> Delete(Guid id)
        {
            BandRequest existingBandRequest = _context.BandRequests.Where(u => u.Id == id).FirstOrDefault();

            existingBandRequest.IsActive = false;

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
                persistModel.IsActive = true;
                persistModel.CreatedAt = DateTime.Now;
                persistModel.UpdatedAt = DateTime.Now;
                await _context.BandRequests.AddAsync(persistModel);
            }
            else if (persistModel.Id != Guid.Empty)
            {
                BandRequest existingBandRequest = _context.BandRequests.Where(u => u.Id == persistModel.Id).FirstOrDefault();

                existingBandRequest.Summary = persistModel.Summary;
                existingBandRequest.Status = persistModel.Status;
                existingBandRequest.UpdatedAt = DateTime.Now;
            }
            await _context.SaveChangesAsync();

            return persistModel;
        }

        public async Task<IEnumerable<BandRequest>> Query(Lookup<BandRequest> lookup)
        {
            if (lookup.Start == null) lookup.Start = 0;

            IQueryable<BandRequest> foundBandRequests = _context.BandRequests.Skip(lookup.Start.Value);

            if (lookup.Limit != null) lookup.Limit = 100;

            foundBandRequests = foundBandRequests.Take(lookup.Limit.Value);

            return foundBandRequests;
        }
    }
}
