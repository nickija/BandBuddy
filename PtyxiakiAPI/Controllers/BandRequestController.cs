using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PtyxiakiAPI.Models;
using PtyxiakiAPI.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PtyxiakiAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BandRequestController : ControllerBase
    {
        private IBandRequestService _bandRequestService;

        public BandRequestController(IBandRequestService bandRequestService)
        {
            this._bandRequestService = bandRequestService;
        }

        //GET: api/BandRequest
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BandRequest>>> GetBandRequests()
        {
            return await _context.BandRequests.ToListAsync();
        }

        //GET: api/BandRequest/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BandRequest>> GetBandRequest(Guid id)
        {
            var bandRequest = await _context.BandRequests.FindAsync(id);

            if (bandRequest == null)
            {
                return NotFound();
            }

            return bandRequest;
        }

        //PUT: api/BandRequest/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBandRequest(Guid id, BandRequest bandRequest)
        {
            if (id != bandRequest.Id)
            {
                return BadRequest();
            }

            _context.Entry(bandRequest).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch
            {
                if (!BandRequestExists(id))
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

        //POST: api/BandRequest
        [HttpPost]
        public async Task<ActionResult<BandRequest>> PostBandRequest(BandRequest bandRequest)
        {
            _context.BandRequests.Add(bandRequest);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBandRequest", new { id = bandRequest.Id }, bandRequest);
        }

        //DELETE: api/BandRequest/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBandRequest(Guid id)
        {
            var bandRequest = await _context.BandRequests.FindAsync(id);
            if (bandRequest == null)
            {
                return NotFound();
            }

            _context.BandRequests.Remove(bandRequest);
            await _context.SaveChangesAsync();

            return NoContent();
        }


        private bool BandRequestExists(Guid id)
        {
            return _context.BandRequests.Any(e => e.Id == id);
        }
    }
}
