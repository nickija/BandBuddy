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
        public DbSet<JobPostingMusician> JobPostingMusicians { get; set; }
        public DbSet<BandUser> BandUsers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<JobPostingMusician>()
                .HasKey(nameof(JobPostingMusician.JobPostingId), nameof(JobPostingMusician.MusicianId));

            modelBuilder.Entity<BandUser>()
                .HasKey(nameof(BandUser.BandId), nameof(BandUser.UserId));
        }
    }
}
