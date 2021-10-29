using PtyxiakiAPI.Lookups;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PtyxiakiAPI.Services
{
    public interface IBasicService<T> 
    {
        Task<T> Persist(T persistModel);

        Task<T> GetSingle(Guid id);

        Task<IEnumerable<T>> Query(Lookup<T> lookup);

        Task<Boolean> Delete(Guid id);
    }
}
