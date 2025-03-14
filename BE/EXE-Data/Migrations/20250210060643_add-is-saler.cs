﻿using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EXE_Data.Migrations
{
	public partial class addissaler : Migration
	{
		protected override void Up(MigrationBuilder migrationBuilder)
		{
			migrationBuilder.AddColumn<bool>(
				name: "IsSaler",
				table: "AspNetUsers",
				type: "tinyint(1)",
				nullable: false,
				defaultValue: false);
		}

		protected override void Down(MigrationBuilder migrationBuilder)
		{
			migrationBuilder.DropColumn(
				name: "IsSaler",
				table: "AspNetUsers");
		}
	}
}
