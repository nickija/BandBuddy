using PtyxiakiAPI.Lookups;
using PtyxiakiAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PtyxiakiAPI.Services
{
    public class UserService : IUserService
    {
        private readonly ApplicationContext _context;

        public UserService(ApplicationContext context)
        {
            _context = context;
        }

        public async Task<bool> Delete(Guid id)
        {
            User existingUser = _context.Users.Where(u => u.Id == id).FirstOrDefault();

            existingUser.IsActive = false;

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

        public async Task<User> GetSingle(Guid id)
        {
            return _context.Users.Where(u => u.Id == id).FirstOrDefault();
        }

        public async Task<User> Persist(User persistModel)
        {
            if(persistModel.Id == Guid.Empty) 
            {
                persistModel.IsActive = true;
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

            if (lookup.Limit != null) lookup.Limit = 100;
        
            foundUsers = foundUsers.Take(lookup.Limit.Value);

            if(String.IsNullOrWhiteSpace(lookup.Like)) foundUsers = foundUsers.Where(x => x.FirstName == lookup.Like || x.LastName == lookup.Like);

            return foundUsers;
        }

    }
}

