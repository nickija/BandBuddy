using PtyxiakiAPI.Lookups;
using PtyxiakiAPI.Models;
using PtyxiakiAPI.Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PtyxiakiAPI.Services
{
    public class BandService : IBandService
    {
        private readonly ApplicationContext _context;

        public BandService(ApplicationContext context)
        {
            _context = context;
        }

        public async Task<bool> Delete(Guid id)
        {
            Band existingBand = _context.Bands.Where(u => u.Id == id).FirstOrDefault();

            existingBand.IsActive = IsActive.Inactive;

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

        public async Task<Band> GetSingle(Guid id)
        {
            return _context.Bands.Where(u => u.Id == id).FirstOrDefault();
        }

        public async Task<Band> Persist(Band persistModel)
        {
            if (persistModel.Id == Guid.Empty)
            {
                persistModel.IsActive = IsActive.Active;
                persistModel.CreatedAt = DateTime.Now;
                persistModel.UpdatedAt = DateTime.Now;
                await _context.Bands.AddAsync(persistModel);
            }
            else if (persistModel.Id != Guid.Empty)
            {
                Band existingBand = _context.Bands.Where(u => u.Id == persistModel.Id).FirstOrDefault();

                existingBand.Genre = persistModel.Genre;
                existingBand.JobPosting = persistModel.JobPosting;
                existingBand.BandName = persistModel.BandName;
                existingBand.Musician = persistModel.Musician;
                existingBand.UpdatedAt = DateTime.Now;
            }
            await _context.SaveChangesAsync();

            return persistModel;
        }

        public async Task<IEnumerable<Band>> Query(Lookup<Band> lookup)
        {
            if (lookup.Start == null) lookup.Start = 0;

            IQueryable<Band> foundBands = _context.Bands.Skip(lookup.Start.Value);

            if (lookup.Limit == null) lookup.Limit = 100;

            foundBands = foundBands.Take(lookup.Limit.Value);

            if (!String.IsNullOrWhiteSpace(lookup.Like)) foundBands = foundBands.Where(x => x.BandName.Contains(lookup.Like) || x.BandName.Contains(lookup.Like));

            if (lookup.IsActive != null && lookup.IsActive != IsActive.All) foundBands = foundBands.Where(u => u.IsActive == lookup.IsActive);

            return foundBands;
        }

        public async Task<QueryResult<Band>> GetQueryResult(Lookup<Band> lookup)
        {
            int total = 0;

            total = _context.Bands.Count();
            if (lookup.Start == null) lookup.Start = 0;

            IQueryable<Band> foundBands = _context.Bands.Skip(lookup.Start.Value);

            if (lookup.Limit == null) lookup.Limit = 100;

            foundBands = foundBands.Take(lookup.Limit.Value);


            if (lookup.IsActive != null && lookup.IsActive != IsActive.All) foundBands = foundBands.Where(u => u.IsActive == lookup.IsActive);

            QueryResult<Band> result = new QueryResult<Band>()
            {
                Count = foundBands.Count(),
                Total = total,
                Items = foundBands
            };
            return result;
        }
    }
}
