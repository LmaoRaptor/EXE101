using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EXE_Data.Migrations
{
    public partial class add_UserName_to_Payment : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UserName",
                table: "Payments",
                type: "longtext",
                nullable: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserName",
                table: "Payments");
        }
    }
}
