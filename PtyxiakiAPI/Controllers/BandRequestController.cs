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
    [Route("api/bandRequest")]
    [ApiController]
    public class BandRequestController : ControllerBase
    {
        private IBandRequestService _bandRequestService;

        public BandRequestController(IBandRequestService bandRequestService)
        {
            this._bandRequestService = bandRequestService;
        }

        [HttpPost("query")]
        public ActionResult<IEnumerable<BandRequest>> Query(Lookup<BandRequest> lookup)
        {
            List<BandRequest> bandRequests = _bandRequestService.Query(lookup).Result.ToList();
            return bandRequests;
        }

        [HttpGet("getSingle/{id}")]
        public ActionResult<BandRequest> Get(Guid id)
        {
            BandRequest bandRequest = _bandRequestService.GetSingle(id).Result;
            return bandRequest;
        }

        [HttpPost("persist")]
        public ActionResult<BandRequest> Persist(BandRequest persistModel)
        {
            BandRequest bandRequest = _bandRequestService.Persist(persistModel).Result;
            return bandRequest;
        }

        [HttpDelete("delete/{id}")]
        public ActionResult<Boolean> Delete(Guid id)
        {
            Boolean result = _bandRequestService.Delete(id).Result;
            return result;
        }
    }
}
