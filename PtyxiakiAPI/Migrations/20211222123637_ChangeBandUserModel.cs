using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PtyxiakiAPI.Migrations
{
    public partial class ChangeBandUserModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedAt",
                table: "BandUsers",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "IsActive",
                table: "BandUsers",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdatedAt",
                table: "BandUsers",
                type: "datetime2",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreatedAt",
                table: "BandUsers");

            migrationBuilder.DropColumn(
                name: "IsActive",
                table: "BandUsers");

            migrationBuilder.DropColumn(
                name: "UpdatedAt",
                table: "BandUsers");
        }
    }
}
