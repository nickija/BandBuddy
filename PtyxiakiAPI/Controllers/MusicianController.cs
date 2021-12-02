using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PtyxiakiAPI.Lookups;
using PtyxiakiAPI.Models;
using PtyxiakiAPI.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PtyxiakiAPI.Controllers
{
    [Route("api/musician")]
    [ApiController]
    public class MusicianController : ControllerBase
    {
        private IMusicianService _musicianService;

        public MusicianController(IMusicianService musicianService)
        {
            this._musicianService = musicianService;
        }

        [HttpPost("query")]
        public ActionResult<QueryResult<Musician>> Query(Lookup<Musician> lookup)
        {
            QueryResult<Musician> result = _musicianService.GetQueryResult(lookup).Result;
            return result;
        }

        [HttpGet("getSingle/{id}")]
        public ActionResult<Musician> Get(Guid id)
        {
            Musician musician = _musicianService.GetSingle(id).Result;
            return musician;
        }

        [HttpGet("getByUserId/{id}")]
        public ActionResult<Musician> GetBy(Guid id)
        {
            Musician musician = _musicianService.GetByUserId(id).Result;
            return musician;
        }

        [HttpPost("persist")]
        public ActionResult<Musician> Persist(Musician persistModel)
        {
            Musician musician = _musicianService.Persist(persistModel).Result;
            return musician;
        }

        [HttpDelete("delete/{id}")]
        public ActionResult<Boolean> Delete(Guid id)
        {
            Boolean result = _musicianService.Delete(id).Result;
            return result;
        }
    }
}
