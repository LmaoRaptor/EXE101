using EXE_Bussiness.Model;
using EXE_Bussiness.Model.PostModel;
using EXE_Data.Data.Entity;

namespace EXE_Bussiness.Service.PostService
{
	public interface IPostService
	{
		/// <summary>
		/// Filter post by postFilter
		/// </summary>
		/// <param name="postFilter"></param>
		/// <returns></returns>
		Task<PagedResponse<PostListItem>> Filter(PostFilterRequest postFilter);
		/// <summary>
		/// Get post detail by id
		/// </summary>
		/// <param name="id"></param>
		/// <returns></returns>
		Task<PostDetail> GetPostDetail(Ulid id);
		/// <summary>
		/// Get post list
		/// </summary>
		/// <returns></returns>
		Task<IEnumerable<PostListItem>> GetPostList();
		/// <summary>
		/// Create post
		/// </summary>
		/// <param name="postCreate"></param>
		/// <returns></returns>
		Task CreatePost(PostCreateRequest postCreate, User user);
		/// <summary>
		/// Update post - return false if post not found and not updated
		/// </summary>
		/// <param name="id"></param>
		/// <param name="postUpdate"></param>
		/// <returns></returns>
		Task<bool> UpdatePost(Ulid id, PostUpdateRequest postUpdate);
		/// <summary>
		/// Delete post - return false if post not found and not deleted
		/// </summary>
		/// <param name="id"></param>
		/// <returns></returns>
		Task<bool> DeletePost(Ulid id);
	}
}
