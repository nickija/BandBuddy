using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PtyxiakiAPI.Models
{
    public class QueryResult<T> where T:class
    {
        public int? Count { get; set; }

        public int? Total { get; set; }

        public IEnumerable<T> Items { get; set; }
    }
}
