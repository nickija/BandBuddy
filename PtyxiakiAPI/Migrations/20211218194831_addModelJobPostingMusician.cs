using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PtyxiakiAPI.Migrations
{
    public partial class addModelJobPostingMusician : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "JobPostingMusicians",
                columns: table => new
                {
                    JobPostingId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    MusicianId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_JobPostingMusicians", x => new { x.JobPostingId, x.MusicianId });
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "JobPostingMusicians");
        }
    }
}
