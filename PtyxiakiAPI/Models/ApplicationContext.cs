using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PtyxiakiAPI.Models
{
    public class ApplicationContext:DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        {

        }


        public DbSet<User> Users { get; set; }
        public DbSet<Musician> Musicians { get; set; }
        public DbSet<Band> Bands { get; set; }
        public DbSet<Instrument> Instruments { get; set; }
        public DbSet<JobPosting> JobPostings { get; set; }
        public DbSet<BandRequest> BandRequests { get; set; }
        public DbSet<DeleteRequest> DeleteRequests { get; set; }
    }
}
