using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EXE_Data.Migrations
{
    public partial class add_Payment_and_update_role : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<decimal>(
                name: "Exprired",
                table: "AspNetRoles",
                type: "decimal(18,2)",
                nullable: true);

            migrationBuilder.AddColumn<decimal>(
                name: "Price",
                table: "AspNetRoles",
                type: "decimal(18,2)",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Payments",
                columns: table => new
                {
                    Id = table.Column<byte[]>(type: "varbinary(16)", nullable: false),
                    Amount = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    UserEmail = table.Column<string>(type: "longtext", nullable: false),
                    RoleName = table.Column<string>(type: "longtext", nullable: false),
                    IsDone = table.Column<bool>(type: "tinyint(1)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Payments", x => x.Id);
                })
                .Annotation("MySQL:Charset", "utf8mb4");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Payments");

            migrationBuilder.DropColumn(
                name: "Exprired",
                table: "AspNetRoles");

            migrationBuilder.DropColumn(
                name: "Price",
                table: "AspNetRoles");
        }
    }
}
