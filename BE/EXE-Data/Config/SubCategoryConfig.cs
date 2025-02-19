using EXE_Data.Data;
using EXE_Data.Data.Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace EXE_Data.Config
{
	public class SubCategoryConfig : IEntityTypeConfiguration<SubCategory>
	{
		public void Configure(EntityTypeBuilder<SubCategory> builder)
		{
			builder.HasKey(x => x.Id);
			builder.Property(x => x.Id).HasConversion<UlidToBytesConverter>();
			builder.HasOne(x => x.Category).WithMany(x => x.SubCategories).HasForeignKey(x => x.CategoryId);
		}
	}
}
