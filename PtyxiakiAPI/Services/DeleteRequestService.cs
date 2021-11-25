using PtyxiakiAPI.Lookups;
using PtyxiakiAPI.Models;
using PtyxiakiAPI.Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PtyxiakiAPI.Services
{
    public class DeleteRequestService : IDeleteRequestService
    {
        private readonly ApplicationContext _context;

        public DeleteRequestService(ApplicationContext context)
        {
            _context = context;
        }

        public async Task<bool> Delete(Guid id)
        {
            DeleteRequest existingDeleteRequest = _context.DeleteRequests.Where(u => u.Id == id).FirstOrDefault();

            existingDeleteRequest.IsActive = IsActive.Inactive;

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

        public async Task<DeleteRequest> GetSingle(Guid id)
        {
            return _context.DeleteRequests.Where(u => u.Id == id).FirstOrDefault();
        }

        public async Task<DeleteRequest> Persist(DeleteRequest persistModel)
        {
            if (persistModel.Id == Guid.Empty)
            {
                persistModel.IsActive = IsActive.Active;
                persistModel.CreatedAt = DateTime.Now;
                persistModel.UpdatedAt = DateTime.Now;
                await _context.DeleteRequests.AddAsync(persistModel);
            }
            else if (persistModel.Id != Guid.Empty)
            {
                DeleteRequest existingDeleteRequest = _context.DeleteRequests.Where(u => u.Id == persistModel.Id).FirstOrDefault();

                existingDeleteRequest.Status = persistModel.Status;
                existingDeleteRequest.Reason = persistModel.Reason;
                existingDeleteRequest.UpdatedAt = DateTime.Now;
            }
            await _context.SaveChangesAsync();

            return persistModel;
        }

        public async Task<IEnumerable<DeleteRequest>> Query(Lookup<DeleteRequest> lookup)
        {
            if (lookup.Start == null) lookup.Start = 0;

            IQueryable<DeleteRequest> foundDeleteRequests = _context.DeleteRequests.Skip(lookup.Start.Value);

            if (lookup.Limit == null) lookup.Limit = 100;

            foundDeleteRequests = foundDeleteRequests.Take(lookup.Limit.Value);

            if (!String.IsNullOrWhiteSpace(lookup.Like)) foundDeleteRequests = foundDeleteRequests.Where(x => x.Band.BandName.Contains(lookup.Like) || x.Band.BandName.Contains(lookup.Like));

            if (lookup.IsActive != null && lookup.IsActive != IsActive.All) foundDeleteRequests = foundDeleteRequests.Where(u => u.IsActive == lookup.IsActive);

            return foundDeleteRequests;
        }

        public async Task<QueryResult<DeleteRequest>> GetQueryResult(Lookup<DeleteRequest> lookup)
        {
            int total = 0;

            total = _context.DeleteRequests.Count();
            if (lookup.Start == null) lookup.Start = 0;

            IQueryable<DeleteRequest> foundDeleteRequests = _context.DeleteRequests.Skip(lookup.Start.Value);

            if (lookup.Limit == null) lookup.Limit = 100;

            foundDeleteRequests = foundDeleteRequests.Take(lookup.Limit.Value);


            if (lookup.IsActive != null && lookup.IsActive != IsActive.All) foundDeleteRequests = foundDeleteRequests.Where(u => u.IsActive == lookup.IsActive);

            QueryResult<DeleteRequest> result = new QueryResult<DeleteRequest>()
            {
                Count = foundDeleteRequests.Count(),
                Total = total,
                Items = foundDeleteRequests
            };
            return result;
        }
    }
}
