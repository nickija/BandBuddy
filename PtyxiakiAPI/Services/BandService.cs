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

        public async Task<Boolean> AcceptApplicant(BandUser bandUser)
        {
            //Find Band
            Band band = _context.Bands.SingleOrDefault(x => x.Id == bandUser.BandId);

            if (band == null) throw new Exception("Band not found");

            //Find User;
            User user = _context.Users.SingleOrDefault(x => x.Id == bandUser.UserId);

            if (user == null) throw new Exception("User not found");
            BandUser newBandUser = new BandUser(bandUser);
            this._context.BandUsers.Add(newBandUser);

            await _context.SaveChangesAsync();

            return true;
        }
        public async Task<QueryResult<Band>> GetQueryResult(Lookup<Band> lookup)
        {
            int total = 0;

            //FILTERS
            if (lookup.Start == null) lookup.Start = 0;

            IQueryable<Band> foundBands = _context.Bands;

            if (lookup.IsActive != null && lookup.IsActive != IsActive.All) foundBands = foundBands.Where(u => u.IsActive == lookup.IsActive);


            if (lookup.Limit == null) lookup.Limit = 100;


            if (lookup.ItemId != null) foundBands = foundBands.Where(x => x.OwnerId == lookup.ItemId);


            //COUNT SKIP TAKE
            total = foundBands.Count();

            foundBands = foundBands.Skip(lookup.Start.Value);
            foundBands = foundBands.Take(lookup.Limit.Value);



            QueryResult<Band> result = new QueryResult<Band>()
            {
                Count = lookup.Limit,
                Total = total,
                Items = foundBands
            };
            return result;
        }

        public async Task<List<User>> GetUsersOfSpecificBand(Guid bandId)
        {
            IEnumerable<BandUser> bandUsers = _context.BandUsers.Where(x => x.BandId == bandId);
            if (bandUsers == null) throw new Exception("Entity not found");
            IEnumerable<Guid> userIds = bandUsers.Select(x => x.UserId);
            List<User> users = _context.Users.Where(x => userIds.Contains(x.Id)).ToList();
            
            return users;
        }

        public async Task<List<Band>> GetBandOfSpecificUser(Guid userId)
        {
            IEnumerable<BandUser> bandUsers = _context.BandUsers.Where(x => x.UserId == userId);
            if (bandUsers == null) throw new Exception("Entity not found");
            IEnumerable<Guid> bandIds = bandUsers.Select(x => x.BandId);
            IEnumerable<Band> bands = _context.Bands.Where(x => bandIds.Contains(x.Id));
            return bands.ToList();
        }
    }
}
