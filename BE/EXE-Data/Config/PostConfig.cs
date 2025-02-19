using EXE_Data.Data;
using EXE_Data.Data.Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace EXE_Data.Config
{
	public class PostConfig : IEntityTypeConfiguration<Post>
	{
		public void Configure(EntityTypeBuilder<Post> builder)
		{
			builder.HasKey(x => x.Id);
			builder.Property(x => x.Id).HasConversion<UlidToBytesConverter>();
			builder.HasOne(x => x.User).WithMany(x => x.Posts).HasForeignKey(x => x.UserId);
			builder.HasOne(x => x.SubCategory).WithMany(x => x.Posts).HasForeignKey(x => x.SubCategoryId);
			builder.HasOne(x => x.Category).WithMany(x => x.Posts).HasForeignKey(x => x.CategoryId);
		}
	}
}
