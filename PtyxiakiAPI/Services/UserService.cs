using PtyxiakiAPI.Lookups;
using PtyxiakiAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PtyxiakiAPI.Models.Enums;
using PtyxiakiAPI.Helpers;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace PtyxiakiAPI.Services
{
    public class UserService : IUserService
    {
        private readonly ApplicationContext _context;
        private readonly AppSettings _appSettings;
        public UserService(ApplicationContext context, IOptions<AppSettings> appSettings)
        {
            _context = context;
            _appSettings = appSettings.Value;
        }

        public async Task<bool> Delete(Guid id)
        {
            User existingUser = _context.Users.Where(u => u.Id == id).FirstOrDefault();

            existingUser.IsActive = IsActive.Inactive;

            try
            {
                await _context.SaveChangesAsync();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public AuthenticateResponse Authenticate(AuthenticateRequest model)
        {
			User user = _context.Users.SingleOrDefault(x => x.Username == model.Username && x.Password == model.Password);
			// return null if user not found
			if (user == null) return null;

            // authentication successful so generate jwt token
            var token = generateJwtToken(user);

            return new AuthenticateResponse(user, token);
        }


        public async Task<User> GetSingle(Guid id)
        {
            return _context.Users.FirstOrDefault(u => u.Id == id);
        }

        public async Task<User> Persist(User persistModel)
        {
            if(persistModel.Id == Guid.Empty) 
            {
                //persistModel.Role = persistModel.Role == null ? RoleEnum.USER : persistModel.Role;
                persistModel.Role = persistModel.Role ?? RoleEnum.USER; //does the same as above
                persistModel.IsActive = IsActive.Active;
                persistModel.CreatedAt = DateTime.Now;
                persistModel.UpdatedAt = DateTime.Now;
                await _context.Users.AddAsync(persistModel);
            }
            else if (persistModel.Id != Guid.Empty)
            {
                User existingUser = _context.Users.Where(u => u.Id == persistModel.Id).FirstOrDefault();

                existingUser.FirstName = persistModel.FirstName;
                existingUser.LastName = persistModel.LastName;
                existingUser.Username = persistModel.Username;
                existingUser.Password = persistModel.Password;
                existingUser.UpdatedAt = DateTime.Now;
            }
            await _context.SaveChangesAsync();

            return persistModel;
        }

        public async Task<IEnumerable<User>> Query(Lookup<User> lookup)
        {
            if (lookup.Start == null) lookup.Start = 0;

            IQueryable<User> foundUsers = _context.Users.Skip(lookup.Start.Value);

            if (lookup.Limit == null) lookup.Limit = 100;
        
            foundUsers = foundUsers.Take(lookup.Limit.Value);

            if(!String.IsNullOrWhiteSpace(lookup.Like)) foundUsers = foundUsers.Where(x => x.FirstName.Contains(lookup.Like) || x.LastName.Contains(lookup.Like));

            if (lookup.IsActive != null && lookup.IsActive != IsActive.All) foundUsers = foundUsers.Where(u => u.IsActive == lookup.IsActive);

            return foundUsers;
        }

        public async Task<QueryResult<User>> GetQueryResult(Lookup<User> lookup)
        {
            int total = 0;

            total = _context.Users.Count();
            if (lookup.Start == null) lookup.Start = 0;

            IQueryable<User> foundUsers = _context.Users.Skip(lookup.Start.Value);

            if (lookup.Limit == null) lookup.Limit = 100;

            foundUsers = foundUsers.Take(lookup.Limit.Value);

            
            if (lookup.IsActive != null && lookup.IsActive != IsActive.All) foundUsers = foundUsers.Where(u => u.IsActive == lookup.IsActive);

            QueryResult<User> result = new QueryResult<User>()
            {
                Count = foundUsers.Count(),
                Total = total,
                Items = foundUsers
            };
            return result;
        }


        // helper methods
        private string generateJwtToken(User user)
        {
            // generate token that is valid for 7 days
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] {new Claim("name", user.FirstName ?? "none"),new Claim("id", user.Id.ToString()), new Claim("role",user.Role != null ? user.Role.ToString() : "none") }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}

