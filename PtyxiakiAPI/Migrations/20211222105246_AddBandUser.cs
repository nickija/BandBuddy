using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PtyxiakiAPI.Migrations
{
    public partial class AddBandUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "BandUsers",
                columns: table => new
                {
                    BandId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    UserId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BandUsers", x => new { x.BandId, x.UserId });
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BandUsers");
        }
    }
}
