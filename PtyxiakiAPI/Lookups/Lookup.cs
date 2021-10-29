using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PtyxiakiAPI.Lookups
{
    public class Lookup<T>
    {
        public int? Start { get; set; }
        public int? Limit { get; set; }
        public string Like { get; set; }
    }
}
