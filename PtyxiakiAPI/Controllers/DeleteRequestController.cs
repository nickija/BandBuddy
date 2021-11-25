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
    [Route("api/deleteRequest")]
    [ApiController]
    public class DeleteRequestController : ControllerBase
    {
        private IDeleteRequestService _deleteRequestService;

        public DeleteRequestController(IDeleteRequestService deleteRequestService)
        {
            this._deleteRequestService = deleteRequestService;
        }

        [HttpPost("query")]
        public ActionResult<QueryResult<DeleteRequest>> Query(Lookup<DeleteRequest> lookup)
        {
            QueryResult<DeleteRequest> result = _deleteRequestService.GetQueryResult(lookup).Result;
            return result;
        }

        [HttpGet("getSingle/{id}")]
        public ActionResult<DeleteRequest> Get(Guid id)
        {
            DeleteRequest deleteRequest = _deleteRequestService.GetSingle(id).Result;
            return deleteRequest;
        }

        [HttpPost("persist")]
        public ActionResult<DeleteRequest> Persist(DeleteRequest persistModel)
        {
            DeleteRequest deleteRequest = _deleteRequestService.Persist(persistModel).Result;
            return deleteRequest;
        }

        [HttpDelete("delete/{id}")]
        public ActionResult<Boolean> Delete(Guid id)
        {
            Boolean result = _deleteRequestService.Delete(id).Result;
            return result;
        }
    }
}
