using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EXE_Data.Migrations
{
    public partial class addcontactforeachpost : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ContactOther",
                table: "Posts",
                type: "longtext",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ContactPhone",
                table: "Posts",
                type: "longtext",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ContactOther",
                table: "Posts");

            migrationBuilder.DropColumn(
                name: "ContactPhone",
                table: "Posts");
        }
    }
}
