using EXE_Bussiness.Model.PostModel;
using EXE_Bussiness.Service.PostService;
using EXE_Data.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860
namespace EXE_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly IPostService _postService;
        private readonly AppDBContext _context;

        public PostController(IPostService postService, AppDBContext _context)
        {
            this._postService = postService;
            this._context = _context;
        }

        // GET api/<PostController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetByIdAsync(string id)
        {
            Ulid ulid;
            if(!Ulid.TryParse(id, out ulid))
            {
                return BadRequest("id not in format");
            }
            return Ok(_postService.GetPostDetail(ulid));

        }

        // GET api/<PostController>
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _postService.GetPostList());
        }

        // Filter api/<PostController>/filter
        [HttpGet("filter")]
        public async Task<IActionResult> Filter([FromQuery] PostFilterRequest postFilter)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest();
            }
            return Ok(await _postService.Filter(postFilter));
        }

        // POST api/<PostController>
        [HttpPost("add")]
        public async Task<IActionResult> AddPost([FromBody] PostCreateRequest postCreate)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest();
            }
            var user = await _context.Users.FindAsync(Ulid.Parse(postCreate.UserId));
            if (!user.IsSaler)
            {
                return Forbid("User can not sell");
            }
            await _postService.CreatePost(postCreate, user);
            return Ok();
        }

        // PUT api/<PostController>/5
        [HttpPut("{id}/update")]
        public async Task<IActionResult> UpdateById(string id, PostUpdateRequest postUpdate)
        {
            Ulid ulid;
            if(!Ulid.TryParse(id, out ulid) || !ModelState.IsValid)
            {
                return BadRequest("id not in format");
            }
            var result = await _postService.UpdatePost(ulid, postUpdate);
            if(!result)
            {
                return NotFound("Post not found");
            }
            return Ok();

        }

        // DELETE api/<PostController>/
        [HttpDelete("{id}/delete")]
        public async Task<IActionResult> DeleteById(string id)
        {
            Ulid ulid;
            if(!Ulid.TryParse(id, out ulid))
            {
                return BadRequest("id not in format");
            }
            var result = await _postService.DeletePost(ulid);
            if(!result)
            {
                return NotFound("Post not found");
            }
            return Ok();
        }
    }
}
