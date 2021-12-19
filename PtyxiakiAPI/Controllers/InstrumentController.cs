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
    [Route("api/instrument")]
    [ApiController]
    public class InstrumentController : ControllerBase
    {
        private IInstrumentService _instrumentService;

        public InstrumentController(IInstrumentService instrumentService)
        {
            this._instrumentService = instrumentService;
        }

        [HttpPost("query")]
        [Authorize]
        public ActionResult<QueryResult<Instrument>> Query(Lookup<Instrument> lookup)
        {
            QueryResult<Instrument> result = _instrumentService.GetQueryResult(lookup).Result;
            return result;
        }

        [HttpGet("getSingle/{id}")]
        [Authorize]
        public ActionResult<Instrument> Get(Guid id)
        {
            Instrument instrument = _instrumentService.GetSingle(id).Result;
            return instrument;
        }

        [HttpPost("persist")]
        [Authorize]
        public ActionResult<Instrument> Persist(Instrument persistModel)
        {
            Instrument instrument = _instrumentService.Persist(persistModel).Result;
            return instrument;
        }

        [HttpDelete("delete/{id}")]
        [Authorize]
        public ActionResult<Boolean> Delete(Guid id)
        {
            Boolean result = _instrumentService.Delete(id).Result;
            return result;
        }
    }
}
