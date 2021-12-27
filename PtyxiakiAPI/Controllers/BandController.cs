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
    [Route("api/band")]
    [ApiController]
    public class BandController : ControllerBase
    {
        private IBandService _bandService;

        public BandController(IBandService bandService)
        {
            this._bandService = bandService;
        }

        [HttpPost("query")]
        [Authorize]
        public ActionResult<QueryResult<Band>> Query(Lookup<Band> lookup)
        {
            QueryResult<Band> result = _bandService.GetQueryResult(lookup).Result;
            return result;
        }

        [HttpGet("getSingle/{id}")]
        [Authorize]
        public ActionResult<Band> Get(Guid id)
        {
            Band band = _bandService.GetSingle(id).Result;
            return band;
        }

        [HttpPost("persist")]
        [Authorize]
        public ActionResult<Band> Persist(Band persistModel)
        {
            Band band = _bandService.Persist(persistModel).Result;
            return band;
        }

        [HttpDelete("delete/{id}")]
        [Authorize]
        public ActionResult<Boolean> Delete(Guid id)
        {
            Boolean result = _bandService.Delete(id).Result;
            return result;
        }

        [HttpPost("accept")]
        [Authorize]
        public ActionResult<Boolean> Accept(BandUser bandUser)
        {
            Boolean result = _bandService.AcceptApplicant(bandUser).Result;
            return result;
        }

        [HttpGet("getUsersByBand/{id}")]
        [Authorize]
        public ActionResult<List<User>> GetUsersByBand(Guid id)
        {
            List<User> users = _bandService.GetUsersOfSpecificBand(id).Result;
            return users;
        }

        [HttpGet("getBandsByUser/{id}")]
        [Authorize]
        public ActionResult<List<Band>> GetBandsByUser(Guid id)
        {
            List<Band> bands = _bandService.GetBandOfSpecificUser(id).Result;
            return bands;
        }
    }
}
