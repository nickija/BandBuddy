using Microsoft.AspNetCore.Http;
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
        private readonly IHttpContextAccessor _httpContextAccessor;

        public BandRequestService(ApplicationContext context,
                        IHttpContextAccessor httpContextAccessor)

        {
            _httpContextAccessor = httpContextAccessor;
            _context = context;
        }

        private Boolean IsCreatorOfBand(Guid bandId)
		{
            Band foundBand = this._context.Bands.SingleOrDefault(b => b.Id == bandId);

            if (foundBand == null) throw new NullReferenceException("This band does not exists!");

            //Check if logged user is the creator of band

            return foundBand.OwnerId == this.GetLoggedUserId();
        }

        private Guid GetLoggedUserId()
		{
            User user = (User)_httpContextAccessor.HttpContext.Items["User"]; //Logged user

            if (user == null) throw new UnauthorizedAccessException();

            return user.Id;
        }

        private Boolean CheckEligibleAction(Guid bandId)
		{
            if (this.IsCreatorOfBand(bandId)) return true;

            throw new UnauthorizedAccessException("Unauthorized");
		}

        public async Task<bool> Delete(Guid id)
        {
            BandRequest existingBandRequest = _context.BandRequests.Where(u => u.Id == id).FirstOrDefault();

            this.CheckEligibleAction(existingBandRequest.BandId);

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
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<BandRequest>> Query(Lookup<BandRequest> lookup)
        {
            throw new NotImplementedException();
        }

        private QueryResult<BandRequest> GenerateQueryResult(List<BandRequest> bandRequests,Lookup<BandRequest> lookup)
		{
            int total = 0;

            total = _context.BandRequests.Count();
            if (lookup.Start == null) lookup.Start = 0;

            List<BandRequest> foundBandRequests = bandRequests.Skip(lookup.Start.Value).ToList();

            if (lookup.Limit == null) lookup.Limit = 100;

            foundBandRequests = foundBandRequests.Take(lookup.Limit.Value).ToList();


            if (lookup.IsActive != null && lookup.IsActive != IsActive.All) foundBandRequests = foundBandRequests.Where(u => u.IsActive == lookup.IsActive).ToList();

            QueryResult<BandRequest> result = new QueryResult<BandRequest>()
            {
                Count = foundBandRequests.Count(),
                Total = total,
                Items = foundBandRequests
            };
            return result;
        }

        public async Task<QueryResult<BandRequest>> RequestsOfMyBand(Lookup<BandRequest> lookup)
        {
            List<BandRequest> requestBands = _context.BandRequests.ToList();

            IEnumerable<Guid> myBandIds = _context.Bands.Where(b => b.OwnerId == this.GetLoggedUserId()).Select(b => b.Id);

            List<BandRequest> requestsOfMyBand = requestBands.Where(r => myBandIds.Contains(r.Id)).ToList();

            return this.GenerateQueryResult(requestsOfMyBand, lookup);
        }

        public async Task<QueryResult<BandRequest>> BandRequestsMadeByMe(Lookup<BandRequest> lookup)
        {
            List<BandRequest> requestBands = _context.BandRequests.ToList();

            Guid MyMusicianId = _context.Musicians.SingleOrDefault(m => m.UserId == this.GetLoggedUserId()).Id;

            List<BandRequest> bandRequestsMadeByMe = requestBands.Where(r => r.MusicianId == MyMusicianId ).ToList();

            return this.GenerateQueryResult(bandRequestsMadeByMe, lookup);
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


        
		public async Task<Boolean> Apply(Guid bandId)
		{
            Musician musician = _context.Musicians.SingleOrDefault(m => 
                m.UserId == this.GetLoggedUserId());

            if(musician == null) throw new NotSupportedException();

            BandRequest bandRequest = new BandRequest(bandId, musician.Id);

            await _context.BandRequests.AddAsync(bandRequest);

            await _context.SaveChangesAsync();

            return true;

        }

        public async Task<Boolean> Approve(Guid id)
		{
            BandRequest existingBandRequest = _context.BandRequests.Where(u => u.Id == id).FirstOrDefault();

            this.CheckEligibleAction(existingBandRequest.BandId);

            existingBandRequest.Status = StatusEnum.APPROVED;

            existingBandRequest.UpdatedAt = DateTime.Now;

            await _context.SaveChangesAsync();

            return true;
        }

        public async Task<Boolean> Reject(Guid id)
		{
            BandRequest existingBandRequest = _context.BandRequests.Where(u => u.Id == id).FirstOrDefault();

            this.CheckEligibleAction(existingBandRequest.BandId);

            existingBandRequest.Status = StatusEnum.REJECTED;

            existingBandRequest.UpdatedAt = DateTime.Now;

            await _context.SaveChangesAsync();

            return true;
        }
	}
}
