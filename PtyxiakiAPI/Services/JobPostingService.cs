using PtyxiakiAPI.Lookups;
using PtyxiakiAPI.Models;
using PtyxiakiAPI.Models.Enums;
using PtyxiakiAPI.Models.Request;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;
using PtyxiakiAPI.ViewModels;

namespace PtyxiakiAPI.Services
{
    public class JobPostingService : IJobPostingService
    {
        private readonly ApplicationContext _context;
        private readonly IHttpContextAccessor _httpContextAccessor;


        public JobPostingService(ApplicationContext context,
            IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
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

        public async Task<JobPostingVM> GetSingleVM(Guid id)
        {
            User user = (User)_httpContextAccessor.HttpContext.Items["User"];
            if (user == null) throw new UnauthorizedAccessException();
            Musician associatedMusician = _context.Musicians.SingleOrDefault(x => x.UserId == user.Id);
            if (associatedMusician == null) throw new Exception("Not found");
            JobPostingMusician foundJobPostingMusician = _context.JobPostingMusicians.SingleOrDefault(x => x.JobPostingId == id && x.MusicianId == associatedMusician.Id);
            JobPosting foundJobPosting = _context.JobPostings.Where(u => u.Id == id).FirstOrDefault();
            JobPostingVM foundJobPostingVM = new JobPostingVM(foundJobPosting, foundJobPostingMusician != null);
            return foundJobPostingVM;
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

            //FILTERS
            if (lookup.Start == null) lookup.Start = 0;

            IQueryable<JobPosting> foundJobPostings = _context.JobPostings;

            if (lookup.IsActive != null && lookup.IsActive != IsActive.All) foundJobPostings = foundJobPostings.Where(u => u.IsActive == lookup.IsActive);


            if (lookup.Limit == null) lookup.Limit = 100;

            
            if (lookup.ItemId != null) foundJobPostings = foundJobPostings.Where(x => x.BandId == lookup.ItemId);

            if (!String.IsNullOrWhiteSpace(lookup.Like)) foundJobPostings = foundJobPostings.Where(x => x.InstrumentRequired.Contains(lookup.Like) || x.GenrePlayed.Contains(lookup.Like));

            //COUNT SKIP TAKE
            total = foundJobPostings.Count();

            foundJobPostings = foundJobPostings.Skip(lookup.Start.Value);
            foundJobPostings = foundJobPostings.Take(lookup.Limit.Value);



            QueryResult<JobPosting> result = new QueryResult<JobPosting>()
            {
                Count = lookup.Limit,
                Total = total,
                Items = foundJobPostings
            };
            return result;
        }

        public async Task<Boolean> ApplyToJob(JobPostingRequest jobPostingRequest)
        {
            //Find JobPosting
            JobPosting jobPosting = _context.JobPostings.SingleOrDefault(x => x.Id == jobPostingRequest.JobPostingId);

            if (jobPosting == null) throw new Exception("Job Posting not found");

            //Find Musician;
            Musician musician = _context.Musicians.SingleOrDefault(x => x.UserId == jobPostingRequest.UserId);

            if (musician == null) throw new Exception("Musician not found");

            JobPostingMusician jobPostingMusician = new JobPostingMusician(jobPostingRequest.JobPostingId, musician.Id);
            this._context.JobPostingMusicians.Add(jobPostingMusician);

            await _context.SaveChangesAsync();

            return true;
        }
        public async Task<bool> RejectApplicant(JobPostingRequest jobPostingRequest)
        {
            //Find JobPosting
            JobPosting jobPosting = _context.JobPostings.SingleOrDefault(x => x.Id == jobPostingRequest.JobPostingId);

            if (jobPosting == null) throw new Exception("Job Posting not found");

            //Find Musician;
            Musician musician = _context.Musicians.SingleOrDefault(x => x.UserId == jobPostingRequest.UserId);

            if (musician == null) throw new Exception("Musician not found");

            JobPostingMusician jobPostingMusician = new JobPostingMusician(jobPostingRequest.JobPostingId, musician.Id);
            this._context.JobPostingMusicians.Remove(jobPostingMusician);

            await _context.SaveChangesAsync();

            return true;
        }

        public async Task<List<Musician>> GetMusiciansOfSpecificJobPosting(Guid jobPostingId)
        {
            IEnumerable<JobPostingMusician> jobPostingMusicians = _context.JobPostingMusicians.Where(x => x.JobPostingId == jobPostingId);
            if (jobPostingMusicians == null) throw new Exception("Entity not found");
            IEnumerable<Guid> musicianIds = jobPostingMusicians.Select(x => x.MusicianId);
            List<Musician> musicians = _context.Musicians.Where(x => musicianIds.Contains(x.Id)).ToList();
            foreach (Musician m in musicians)
            {
                m.User = m.User ?? _context.Users.SingleOrDefault(u => u.Id == m.UserId);
            }
            return musicians;
        }

        public async Task<List<JobPosting>> GetJobPostingOfSpecificMusician(Guid musicianId)
        {
            IEnumerable<JobPostingMusician> jobPostingMusicians = _context.JobPostingMusicians.Where(x => x.MusicianId == musicianId);
            if (jobPostingMusicians == null) throw new Exception("Entity not found");
            IEnumerable<Guid> jobPostingIds = jobPostingMusicians.Select(x => x.JobPostingId);
            IEnumerable<JobPosting> jobPostings = _context.JobPostings.Where(x => jobPostingIds.Contains(x.Id));
            return jobPostings.ToList();
        }

        
    }
}
