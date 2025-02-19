using AutoMapper;
using EXE_Data.Data;
using EXE_Data.Data.Entity;
using Microsoft.Extensions.Logging;

namespace EXE_Bussiness.Service.ImageService
{
	public class ImageService : IImageService
	{
		private readonly AppDBContext _context;
		private readonly IMapper _mapper;
		private readonly ILogger<ImageService> _logger;

		public ImageService(AppDBContext context, IMapper mapper, ILogger<ImageService> logger)
		{
			_mapper = mapper;
			_context = context;
			_logger = logger;
		}
		public async Task AddRangeImage(List<string> src, Ulid postId)
		{
			foreach(var item in src)
			{
				var image = new Image
				{
					Id = Ulid.NewUlid(),
					Path = item,
					PostId = postId
				};
				_context.Images.Add(image);
			}
			var result = await _context.SaveChangesAsync() > 0;
			if(result)
			{
				_logger.LogInformation("Image added successfully");
			}
			else
			{
				_logger.LogError("Image added failed");
			}
		}
	}
}
