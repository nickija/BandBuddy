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
    public class MusicianController : ControllerBase
    {
        private IMusicianService _musicianService;

        public MusicianController(IMusicianService musicianService)
        {
            this._musicianService = musicianService;
        }

        //GET: api/Musician
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Musician>>> GetMusicians()
        {
            return await _context.Musicians.ToListAsync();
        }

        //GET: api/Musician/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Musician>> GetMusician(Guid id)
        {
            var musician = await _context.Musicians.FindAsync(id);

            if (musician == null)
            {
                return NotFound();
            }

            return musician;
        }

        //PUT: api/Musician/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMusician(Guid id, Musician musician)
        {
            if (id != musician.Id)
            {
                return BadRequest();
            }

            _context.Entry(musician).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch
            {
                if (!MusicianExists(id))
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

        //POST: api/Musician
        [HttpPost]
        public async Task<ActionResult<Musician>> PostMusician(Musician musician)
        {
            _context.Musicians.Add(musician);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMusician", new { id = musician.Id }, musician);
        }

        //DELETE: api/Musician/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMusician(Guid id)
        {
            var musician = await _context.Musicians.FindAsync(id);
            if (musician == null)
            {
                return NotFound();
            }

            _context.Musicians.Remove(musician);
            await _context.SaveChangesAsync();

            return NoContent();
        }


        private bool MusicianExists(Guid id)
        {
            return _context.Musicians.Any(e => e.Id == id);
        }
    }
}
