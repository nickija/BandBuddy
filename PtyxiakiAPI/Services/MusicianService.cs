using PtyxiakiAPI.Lookups;
using PtyxiakiAPI.Models;
using PtyxiakiAPI.Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PtyxiakiAPI.Services
{
    public class MusicianService : IMusicianService
    {
        private readonly ApplicationContext _context;

        public MusicianService(ApplicationContext context)
        {
            _context = context;
        }

        public async Task<bool> Delete(Guid id)
        {
            Musician existingMusician = _context.Musicians.Where(u => u.Id == id).FirstOrDefault();

            existingMusician.IsActive = IsActive.Inactive;

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

        public async Task<Musician> GetSingle(Guid id)
        {
            return _context.Musicians.Where(u => u.Id == id).FirstOrDefault();
        }

        public async Task<Musician> GetByUserId(Guid id)
        {
            return _context.Musicians.Where(u => u.UserId == id).FirstOrDefault();
        }

        public async Task<Musician> Persist(Musician persistModel)
        {
            if (persistModel.Id == Guid.Empty)
            {
                persistModel.IsActive = IsActive.Active;
                persistModel.CreatedAt = DateTime.Now;
                persistModel.UpdatedAt = DateTime.Now;
                await _context.Musicians.AddAsync(persistModel);
            }
            else if (persistModel.Id != Guid.Empty)
            {
                Musician existingMusician = _context.Musicians.Where(u => u.Id == persistModel.Id).FirstOrDefault();

                existingMusician.JobPosting = persistModel.JobPosting;
                existingMusician.Education = persistModel.Education;
                existingMusician.Area = persistModel.Area;
                existingMusician.UpdatedAt = DateTime.Now;
            }
            await _context.SaveChangesAsync();

            return persistModel;
        }

        public async Task<IEnumerable<Musician>> Query(Lookup<Musician> lookup)
        {
            if (lookup.Start == null) lookup.Start = 0;

            IQueryable<Musician> foundMusicians = _context.Musicians.Skip(lookup.Start.Value);

            if (lookup.Limit == null) lookup.Limit = 100;

            foundMusicians = foundMusicians.Take(lookup.Limit.Value);

            //if (!String.IsNullOrWhiteSpace(lookup.Like)) foundMusicians = foundMusicians.Where(x => x.Area.Contains(lookup.Like) || x.Area.Contains(lookup.Like));

            if (lookup.IsActive != null && lookup.IsActive != IsActive.All) foundMusicians = foundMusicians.Where(u => u.IsActive == lookup.IsActive);

            return foundMusicians;
        }

        public async Task<QueryResult<Musician>> GetQueryResult(Lookup<Musician> lookup)
        {
            int total = 0;

            total = _context.Musicians.Count();
            if (lookup.Start == null) lookup.Start = 0;

            IQueryable<Musician> foundMusicians = _context.Musicians.Skip(lookup.Start.Value);

            if (lookup.Limit == null) lookup.Limit = 100;

            foundMusicians = foundMusicians.Take(lookup.Limit.Value);


            if (lookup.IsActive != null && lookup.IsActive != IsActive.All) foundMusicians = foundMusicians.Where(u => u.IsActive == lookup.IsActive);

            QueryResult<Musician> result = new QueryResult<Musician>()
            {
                Count = foundMusicians.Count(),
                Total = total,
                Items = foundMusicians
            };
            return result;
        }
    }
}
