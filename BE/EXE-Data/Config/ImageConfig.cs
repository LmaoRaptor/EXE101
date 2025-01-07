using EXE_Data.Data;
using EXE_Data.Data.Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace EXE_Data.Config
{
    public class ImageConfig : IEntityTypeConfiguration<Image>
    {
        public void Configure(EntityTypeBuilder<Image> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id).HasConversion<UlidToBytesConverter>();
            builder.HasOne(x => x.Post).WithMany(x => x.Images).HasForeignKey(x => x.PostId);
        }
    }
}
