namespace EXE_Bussiness.Model
{
	public class PagedResponse<T>
	{
		public IEnumerable<T> Data { get; set; }
		public int PageIndex { get; set; }
		public int PageSize { get; set; }
		public int TotalCount { get; set; }
		public int TotalPages => (TotalCount + PageSize - 1) / PageSize;

		public PagedResponse(IEnumerable<T> data, int count, int pageIndex, int pageSize)
		{
			Data = data;
			PageIndex = pageIndex;
			PageSize = pageSize;
			TotalCount = count;
		}
		public PagedResponse()
		{

		}
	}
}
