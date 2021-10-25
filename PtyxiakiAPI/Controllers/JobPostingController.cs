using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PtyxiakiAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PtyxiakiAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobPostingController : ControllerBase
    {
        private readonly ApplicationContext _context;

        public JobPostingController(ApplicationContext context)
        {
            _context = context;
        }

        //GET: api/JobPosting
        [HttpGet]
        public async Task<ActionResult<IEnumerable<JobPosting>>> GetJobPostings()
        {
            return await _context.JobPostings.ToListAsync();
        }

        //GET: api/JobPosting/5
        [HttpGet("{id}")]
        public async Task<ActionResult<JobPosting>> GetJobPosting(Guid id)
        {
            var jobPosting = await _context.JobPostings.FindAsync(id);

            if (jobPosting == null)
            {
                return NotFound();
            }

            return jobPosting;
        }

        //PUT: api/JobPosting/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutJobPosting(Guid id, JobPosting jobPosting)
        {
            if (id != jobPosting.Id)
            {
                return BadRequest();
            }

            _context.Entry(jobPosting).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch
            {
                if (!JobPostingExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        //POST: api/JobPosting
        [HttpPost]
        public async Task<ActionResult<JobPosting>> PostJobPosting(JobPosting jobPosting)
        {
            _context.JobPostings.Add(jobPosting);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetJobPosting", new { id = jobPosting.Id }, jobPosting);
        }

        //DELETE: api/JobPosting/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteJobPosting(Guid id)
        {
            var jobPosting = await _context.JobPostings.FindAsync(id);
            if (jobPosting == null)
            {
                return NotFound();
            }

            _context.JobPostings.Remove(jobPosting);
            await _context.SaveChangesAsync();

            return NoContent();
        }


        private bool JobPostingExists(Guid id)
        {
            return _context.JobPostings.Any(e => e.Id == id);
        }
    }
}
