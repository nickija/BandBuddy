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
    public class DeleteRequestController : ControllerBase
    {
        private IDeleteRequestService _deleteRequestService;

        public DeleteRequestController(IDeleteRequestService deleteRequestService)
        {
            this._deleteRequestService = deleteRequestService;
        }

        //GET: api/DeleteRequest
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DeleteRequest>>> GetDeleteRequests()
        {
            return await _context.DeleteRequests.ToListAsync();
        }

        //GET: api/DeleteRequest/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DeleteRequest>> GetDeleteRequest(Guid id)
        {
            var deleteRequest = await _context.DeleteRequests.FindAsync(id);

            if (deleteRequest == null)
            {
                return NotFound();
            }

            return deleteRequest;
        }

        //PUT: api/DeleteRequest/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDeleteRequest(Guid id, DeleteRequest deleteRequest)
        {
            if (id != deleteRequest.Id)
            {
                return BadRequest();
            }

            _context.Entry(deleteRequest).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch
            {
                if (!DeleteRequestExists(id))
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

        //POST: api/DeleteRequest
        [HttpPost]
        public async Task<ActionResult<DeleteRequest>> PostDeleteRequest(DeleteRequest deleteRequest)
        {
            _context.DeleteRequests.Add(deleteRequest);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDeleteRequest", new { id = deleteRequest.Id }, deleteRequest);
        }

        //DELETE: api/DeleteRequest/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDeleteRequest(Guid id)
        {
            var deleteRequest = await _context.DeleteRequests.FindAsync(id);
            if (deleteRequest == null)
            {
                return NotFound();
            }

            _context.DeleteRequests.Remove(deleteRequest);
            await _context.SaveChangesAsync();

            return NoContent();
        }


        private bool DeleteRequestExists(Guid id)
        {
            return _context.DeleteRequests.Any(e => e.Id == id);
        }
    }
}
