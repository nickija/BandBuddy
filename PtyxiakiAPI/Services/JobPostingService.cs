using PtyxiakiAPI.Lookups;
using PtyxiakiAPI.Models;
using PtyxiakiAPI.Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PtyxiakiAPI.Services
{
    public class JobPostingService : IJobPostingService
    {
        private readonly ApplicationContext _context;

        public JobPostingService(ApplicationContext context)
        {
            _context = context;
        }

        public async Task<bool> Delete(Guid id)
        {
            JobPosting existingJobPosting = _context.JobPostings.Where(u => u.Id == id).FirstOrDefault();

            existingJobPosting.IsActive = IsActive.Inactive;

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

        public async Task<JobPosting> GetSingle(Guid id)
        {
            return _context.JobPostings.Where(u => u.Id == id).FirstOrDefault();
        }

        public async Task<JobPosting> Persist(JobPosting persistModel)
        {
            if (persistModel.Id == Guid.Empty)
            {
                persistModel.IsActive = IsActive.Active;
                persistModel.CreatedAt = DateTime.Now;
                persistModel.UpdatedAt = DateTime.Now;
                await _context.JobPostings.AddAsync(persistModel);
            }
            else if (persistModel.Id != Guid.Empty)
            {
                JobPosting existingJobPosting = _context.JobPostings.Where(u => u.Id == persistModel.Id).FirstOrDefault();

                existingJobPosting.InstrumentRequired = persistModel.InstrumentRequired;
                existingJobPosting.GenrePlayed = persistModel.GenrePlayed;
                existingJobPosting.Area = persistModel.Area;
                existingJobPosting.Musician = persistModel.Musician;
                existingJobPosting.Skill = persistModel.Skill;
                existingJobPosting.UpdatedAt = DateTime.Now;
            }
            await _context.SaveChangesAsync();

            return persistModel;
        }

        public async Task<IEnumerable<JobPosting>> Query(Lookup<JobPosting> lookup)
        {
            if (lookup.Start == null) lookup.Start = 0;

            IQueryable<JobPosting> foundJobPostings = _context.JobPostings.Skip(lookup.Start.Value);

            if (lookup.Limit == null) lookup.Limit = 100;

            foundJobPostings = foundJobPostings.Take(lookup.Limit.Value);

            if (!String.IsNullOrWhiteSpace(lookup.Like)) foundJobPostings = foundJobPostings.Where(x => x.InstrumentRequired.Contains(lookup.Like) || x.InstrumentRequired.Contains(lookup.Like));

            if (lookup.IsActive != null && lookup.IsActive != IsActive.All) foundJobPostings = foundJobPostings.Where(u => u.IsActive == lookup.IsActive);

            return foundJobPostings;
        }

        public async Task<QueryResult<JobPosting>> GetQueryResult(Lookup<JobPosting> lookup)
        {
            int total = 0;

            total = _context.JobPostings.Count();
            if (lookup.Start == null) lookup.Start = 0;

            IQueryable<JobPosting> foundJobPostings = _context.JobPostings.Skip(lookup.Start.Value);

            if (lookup.Limit == null) lookup.Limit = 100;

            foundJobPostings = foundJobPostings.Take(lookup.Limit.Value);

            if (!String.IsNullOrWhiteSpace(lookup.Like)) foundJobPostings = foundJobPostings.Where(x => x.InstrumentRequired.Contains(lookup.Like) || x.InstrumentRequired.Contains(lookup.Like));

            if (lookup.IsActive != null && lookup.IsActive != IsActive.All) foundJobPostings = foundJobPostings.Where(u => u.IsActive == lookup.IsActive);

            QueryResult<JobPosting> result = new QueryResult<JobPosting>()
            {
                Count = foundJobPostings.Count(),
                Total = total,
                Items = foundJobPostings
            };
            return result;
        }
    }
}
