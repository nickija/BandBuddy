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
        [Authorize]
        public ActionResult<QueryResult<BandRequest>> Query(Lookup<BandRequest> lookup)
        {
            QueryResult<BandRequest> result = _bandRequestService.GetQueryResult(lookup).Result;
            return result;
        }

        [HttpGet("getSingle/{id}")]
        [Authorize]
        public ActionResult<BandRequest> Get(Guid id)
        {
            BandRequest bandRequest = _bandRequestService.GetSingle(id).Result;
            return bandRequest;
        }

        [HttpPost("persist")]
        [Authorize]
        public ActionResult<BandRequest> Persist(BandRequest persistModel)
        {
            BandRequest bandRequest = _bandRequestService.Persist(persistModel).Result;
            return bandRequest;
        }

        [HttpDelete("delete/{id}")]
        [Authorize]
        public ActionResult<Boolean> Delete(Guid id)
        {
            Boolean result = _bandRequestService.Delete(id).Result;
            return result;
        }

        [HttpGet("apply/{id}")]
        [Authorize]
        public ActionResult<Boolean> Apply(Guid id)
        {
            Boolean result = _bandRequestService.Apply(id).Result;
            return result;
        }

        [HttpGet("reject/{id}")]
        [Authorize]
        public ActionResult<Boolean> Reject(Guid id)
        {
            Boolean result = _bandRequestService.Reject(id).Result;
            return result;
        }

        [HttpGet("apply/{id}")]
        [Authorize]
        public ActionResult<Boolean> Approve(Guid id)
        {
            Boolean result = _bandRequestService.Approve(id).Result;
            return result;
        }

        [HttpPost("requesofmyband")]
        [Authorize]
        public ActionResult<QueryResult<BandRequest>> RequestOfMyBand(Lookup<BandRequest> lookup)
        {
            QueryResult<BandRequest> result = _bandRequestService.RequestsOfMyBand(lookup).Result;
            return result;
        }

        [HttpPost("bandrequestmadebyme")]
        [Authorize]
        public ActionResult<QueryResult<BandRequest>> BandRequestsMadeByMe(Lookup<BandRequest> lookup)
        {
            QueryResult<BandRequest> result = _bandRequestService.BandRequestsMadeByMe(lookup).Result;
            return result;
        }
    }
}
