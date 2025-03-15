using EXE_Data.Data.Entity;
using EXE_Data.Data;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

namespace EXE_Data.Config
{
	public class PaymentConfig : IEntityTypeConfiguration<Payment>
	{
		public void Configure(EntityTypeBuilder<Payment> builder)
		{
			builder.HasKey(x => x.Id);
			builder.Property(x => x.Id).HasConversion<UlidToBytesConverter>();
		}
	}
}
