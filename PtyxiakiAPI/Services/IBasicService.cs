using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PtyxiakiAPI.Services
{
    public interface IBasicService<T>
    {
        T Persist();

        T GetSingle();

        IEnumerable<T> Query();

        T Delete();
    }
}
