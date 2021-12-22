﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using PtyxiakiAPI.Models;

namespace PtyxiakiAPI.Migrations
{
    [DbContext(typeof(ApplicationContext))]
    partial class ApplicationContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.11")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("JobPostingMusician", b =>
                {
                    b.Property<Guid>("JobPostingId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("MusicianId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("JobPostingId", "MusicianId");

                    b.HasIndex("MusicianId");

                    b.ToTable("JobPostingMusician");
                });

            modelBuilder.Entity("PtyxiakiAPI.Models.Band", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("BandName")
                        .HasColumnType("nvarchar(100)");

                    b.Property<DateTime?>("CreatedAt")
                        .HasColumnType("datetime2");

                    b.Property<string>("Genre")
                        .HasColumnType("nvarchar(100)");

                    b.Property<int?>("IsActive")
                        .HasColumnType("int");

                    b.Property<Guid>("OwnerId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime?>("UpdatedAt")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.HasIndex("OwnerId");

                    b.ToTable("Bands");
                });

            modelBuilder.Entity("PtyxiakiAPI.Models.BandRequest", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("BandId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime?>("CreatedAt")
                        .HasColumnType("datetime2");

                    b.Property<int?>("IsActive")
                        .HasColumnType("int");

                    b.Property<Guid>("MusicianId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<int?>("Status")
                        .HasColumnType("int");

                    b.Property<string>("Summary")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("UpdatedAt")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.HasIndex("BandId");

                    b.HasIndex("MusicianId");

                    b.ToTable("BandRequests");
                });

            modelBuilder.Entity("PtyxiakiAPI.Models.BandUser", b =>
                {
                    b.Property<Guid>("BandId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("UserId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime?>("CreatedAt")
                        .HasColumnType("datetime2");

                    b.Property<int?>("IsActive")
                        .HasColumnType("int");

                    b.Property<DateTime?>("UpdatedAt")
                        .HasColumnType("datetime2");

                    b.HasKey("BandId", "UserId");

                    b.ToTable("BandUsers");
                });

            modelBuilder.Entity("PtyxiakiAPI.Models.DeleteRequest", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("BandId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime?>("CreatedAt")
                        .HasColumnType("datetime2");

                    b.Property<int?>("IsActive")
                        .HasColumnType("int");

                    b.Property<string>("Reason")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("Status")
                        .HasColumnType("int");

                    b.Property<DateTime?>("UpdatedAt")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.HasIndex("BandId");

                    b.ToTable("DeleteRequests");
                });

            modelBuilder.Entity("PtyxiakiAPI.Models.Instrument", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime?>("CreatedAt")
                        .HasColumnType("datetime2");

                    b.Property<string>("InstrumentType")
                        .HasColumnType("nvarchar(100)");

                    b.Property<int?>("IsActive")
                        .HasColumnType("int");

                    b.Property<Guid>("MusicianId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<int?>("Skill")
                        .HasColumnType("int");

                    b.Property<DateTime?>("UpdatedAt")
                        .HasColumnType("datetime2");

                    b.Property<int?>("YearsExperiecnce")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("MusicianId");

                    b.ToTable("Instruments");
                });

            modelBuilder.Entity("PtyxiakiAPI.Models.JobPosting", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<int?>("Area")
                        .HasColumnType("int");

                    b.Property<Guid?>("BandId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime?>("CreatedAt")
                        .HasColumnType("datetime2");

                    b.Property<string>("GenrePlayed")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("InstrumentRequired")
                        .HasColumnType("nvarchar(100)");

                    b.Property<int?>("IsActive")
                        .HasColumnType("int");

                    b.Property<int?>("Skill")
                        .HasColumnType("int");

                    b.Property<DateTime?>("UpdatedAt")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.HasIndex("BandId");

                    b.ToTable("JobPostings");
                });

            modelBuilder.Entity("PtyxiakiAPI.Models.JobPostingMusician", b =>
                {
                    b.Property<Guid>("JobPostingId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("MusicianId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("JobPostingId", "MusicianId");

                    b.ToTable("JobPostingMusicians");
                });

            modelBuilder.Entity("PtyxiakiAPI.Models.Musician", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<int?>("Area")
                        .HasColumnType("int");

                    b.Property<Guid?>("BandId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime?>("CreatedAt")
                        .HasColumnType("datetime2");

                    b.Property<string>("Education")
                        .HasColumnType("nvarchar(100)");

                    b.Property<int?>("IsActive")
                        .HasColumnType("int");

                    b.Property<DateTime?>("UpdatedAt")
                        .HasColumnType("datetime2");

                    b.Property<Guid>("UserId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.HasIndex("BandId");

                    b.HasIndex("UserId");

                    b.ToTable("Musicians");
                });

            modelBuilder.Entity("PtyxiakiAPI.Models.User", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime?>("CreatedAt")
                        .HasColumnType("datetime2");

                    b.Property<string>("FirstName")
                        .HasColumnType("nvarchar(100)");

                    b.Property<int?>("IsActive")
                        .HasColumnType("int");

                    b.Property<string>("LastName")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(100)");

                    b.Property<int?>("Role")
                        .HasColumnType("int");

                    b.Property<DateTime?>("UpdatedAt")
                        .HasColumnType("datetime2");

                    b.Property<string>("Username")
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("JobPostingMusician", b =>
                {
                    b.HasOne("PtyxiakiAPI.Models.JobPosting", null)
                        .WithMany()
                        .HasForeignKey("JobPostingId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("PtyxiakiAPI.Models.Musician", null)
                        .WithMany()
                        .HasForeignKey("MusicianId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("PtyxiakiAPI.Models.Band", b =>
                {
                    b.HasOne("PtyxiakiAPI.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("OwnerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("PtyxiakiAPI.Models.BandRequest", b =>
                {
                    b.HasOne("PtyxiakiAPI.Models.Band", "Band")
                        .WithMany()
                        .HasForeignKey("BandId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("PtyxiakiAPI.Models.Musician", "Musician")
                        .WithMany()
                        .HasForeignKey("MusicianId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Band");

                    b.Navigation("Musician");
                });

            modelBuilder.Entity("PtyxiakiAPI.Models.DeleteRequest", b =>
                {
                    b.HasOne("PtyxiakiAPI.Models.Band", "Band")
                        .WithMany()
                        .HasForeignKey("BandId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Band");
                });

            modelBuilder.Entity("PtyxiakiAPI.Models.Instrument", b =>
                {
                    b.HasOne("PtyxiakiAPI.Models.Musician", "Musician")
                        .WithMany()
                        .HasForeignKey("MusicianId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Musician");
                });

            modelBuilder.Entity("PtyxiakiAPI.Models.JobPosting", b =>
                {
                    b.HasOne("PtyxiakiAPI.Models.Band", null)
                        .WithMany("JobPosting")
                        .HasForeignKey("BandId");
                });

            modelBuilder.Entity("PtyxiakiAPI.Models.Musician", b =>
                {
                    b.HasOne("PtyxiakiAPI.Models.Band", null)
                        .WithMany("Musician")
                        .HasForeignKey("BandId");

                    b.HasOne("PtyxiakiAPI.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("PtyxiakiAPI.Models.Band", b =>
                {
                    b.Navigation("JobPosting");

                    b.Navigation("Musician");
                });
#pragma warning restore 612, 618
        }
    }
}
