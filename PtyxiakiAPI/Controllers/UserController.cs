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
    [Route("api/user")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private IUserService _userService;

        public UserController(IUserService userService)
        {
            this._userService = userService;
        }
        [HttpPost("authenticate")]
        public ActionResult Authenticate(AuthenticateRequest model)
        {
            var response = _userService.Authenticate(model);

            if (response == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            return Ok(response);
        }

        [HttpPost("query")]
        [Authorize]
        public ActionResult<QueryResult<User>> Query(Lookup<User> lookup)
        {
            QueryResult<User> result = _userService.GetQueryResult(lookup).Result;
            return result;
        }

        [HttpGet("getSingle/{id}")]
        public ActionResult<User> Get(Guid id)
        {
            User user = _userService.GetSingle(id).Result;
            return user;
        }

        [HttpPost("persist")]
        public ActionResult<User> Persist(User persistModel)
        {
            User user = _userService.Persist(persistModel).Result;
            return user;
        }

        [HttpDelete("delete/{id}")]
        public ActionResult<Boolean> Delete(Guid id)
        {
            Boolean result = _userService.Delete(id).Result;
            return result;
        }
    }
}
