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
    public class InstrumentController : ControllerBase
    {
        private readonly ApplicationContext _context;

        public InstrumentController(ApplicationContext context)
        {
            _context = context;
        }

        //GET: api/Instrument
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Instrument>>> GetInstruments()
        {
            return await _context.Instruments.ToListAsync();
        }

        //GET: api/Instrument/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Instrument>> GetInstrument(Guid id)
        {
            var instrument = await _context.Instruments.FindAsync(id);

            if (instrument == null)
            {
                return NotFound();
            }

            return instrument;
        }

        //PUT: api/Instrument/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInstrument(Guid id, Instrument instrument)
        {
            if (id != instrument.Id)
            {
                return BadRequest();
            }

            _context.Entry(instrument).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch
            {
                if (!InstrumentExists(id))
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

        //POST: api/Instrument
        [HttpPost]
        public async Task<ActionResult<Instrument>> PostInstrument(Instrument instrument)
        {
            _context.Instruments.Add(instrument);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetInstrument", new { id = instrument.Id }, instrument);
        }

        //DELETE: api/Instrument/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInstrument(Guid id)
        {
            var instrument = await _context.Instruments.FindAsync(id);
            if (instrument == null)
            {
                return NotFound();
            }

            _context.Instruments.Remove(instrument);
            await _context.SaveChangesAsync();

            return NoContent();
        }


        private bool InstrumentExists(Guid id)
        {
            return _context.Instruments.Any(e => e.Id == id);
        }
    }
}
