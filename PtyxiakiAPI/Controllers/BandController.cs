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
    public class BandController : ControllerBase
    {
        private IBandService _bandService;

        public BandController(IBandService bandService)
        {
            this._bandService = bandService;
        }

        //GET: api/Band
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Band>>> GetBands()
        {
            return await _context.Bands.ToListAsync();
        }

        //GET: api/Band/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Band>> GetBand(Guid id)
        {
            var band = await _context.Bands.FindAsync(id);

            if (band == null)
            {
                return NotFound();
            }

            return band;
        }

        //PUT: api/Band/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBand(Guid id, Band band)
        {
            if (id != band.Id)
            {
                return BadRequest();
            }

            _context.Entry(band).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch
            {
                if (!BandExists(id))
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

        //POST: api/Band
        [HttpPost]
        public async Task<ActionResult<Band>> PostBand(Band band)
        {
            _context.Bands.Add(band);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBand", new { id = band.Id }, band);
        }

        //DELETE: api/Band/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBand(Guid id)
        {
            var band = await _context.Bands.FindAsync(id);
            if (band == null)
            {
                return NotFound();
            }

            _context.Bands.Remove(band);
            await _context.SaveChangesAsync();

            return NoContent();
        }


        private bool BandExists(Guid id)
        {
            return _context.Bands.Any(e => e.Id == id);
        }
    }
}
