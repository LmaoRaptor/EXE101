using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EXE_Bussiness.Service.ImageService
{
	public interface IImageService
	{
		Task AddRangeImage(List<string> src, Ulid postId);
	}
}
