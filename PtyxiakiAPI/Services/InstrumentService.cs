using PtyxiakiAPI.Lookups;
using PtyxiakiAPI.Models;
using PtyxiakiAPI.Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PtyxiakiAPI.Services
{
    public class InstrumentService : IInstrumentService
    {
        private readonly ApplicationContext _context;

        public InstrumentService(ApplicationContext context)
        {
            _context = context;
        }

        public async Task<bool> Delete(Guid id)
        {
            Instrument existingInstrument = _context.Instruments.Where(u => u.Id == id).FirstOrDefault();

            existingInstrument.IsActive = IsActive.Inactive;

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

        public async Task<Instrument> GetSingle(Guid id)
        {
            return _context.Instruments.Where(u => u.Id == id).FirstOrDefault();
        }

        public async Task<Instrument> Persist(Instrument persistModel)
        {
            if (persistModel.Id == Guid.Empty)
            {
                persistModel.IsActive = IsActive.Active;
                persistModel.CreatedAt = DateTime.Now;
                persistModel.UpdatedAt = DateTime.Now;
                await _context.Instruments.AddAsync(persistModel);
            }
            else if (persistModel.Id != Guid.Empty)
            {
                Instrument existingInstrument = _context.Instruments.Where(u => u.Id == persistModel.Id).FirstOrDefault();

                existingInstrument.InstrumentType = persistModel.InstrumentType;
                existingInstrument.Skill = persistModel.Skill;
                existingInstrument.YearsExperiecnce = persistModel.YearsExperiecnce;
                existingInstrument.UpdatedAt = DateTime.Now;
            }
            await _context.SaveChangesAsync();

            return persistModel;
        }

        public async Task<IEnumerable<Instrument>> Query(Lookup<Instrument> lookup)
        {
            if (lookup.Start == null) lookup.Start = 0;

            IQueryable<Instrument> foundInstruments = _context.Instruments.Skip(lookup.Start.Value);

            if (lookup.Limit == null) lookup.Limit = 100;

            foundInstruments = foundInstruments.Take(lookup.Limit.Value);

            if (!String.IsNullOrWhiteSpace(lookup.Like)) foundInstruments = foundInstruments.Where(x => x.InstrumentType.Contains(lookup.Like) || x.InstrumentType.Contains(lookup.Like));

            if (lookup.IsActive != null && lookup.IsActive != IsActive.All) foundInstruments = foundInstruments.Where(u => u.IsActive == lookup.IsActive);

            return foundInstruments;
        }

        public async Task<QueryResult<Instrument>> GetQueryResult(Lookup<Instrument> lookup)
        {
            int total = 0;

            total = _context.Instruments.Count();
            if (lookup.Start == null) lookup.Start = 0;

            IQueryable<Instrument> foundInstruments = _context.Instruments.Skip(lookup.Start.Value);

            if (lookup.Limit == null) lookup.Limit = 100;

            foundInstruments = foundInstruments.Take(lookup.Limit.Value);

            //if (!String.IsNullOrWhiteSpace(lookup.Like)) foundInstruments = foundInstruments.Where(x => x.MusicianId == lookup.ItemId);


            if (lookup.IsActive != null && lookup.IsActive != IsActive.All) foundInstruments = foundInstruments.Where(u => u.IsActive == lookup.IsActive);

            QueryResult<Instrument> result = new QueryResult<Instrument>()
            {
                Count = foundInstruments.Count(),
                Total = total,
                Items = foundInstruments
            };
            return result;
        }
    }
}
