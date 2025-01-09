using EXE_Bussiness.Model.PostModel;
using EXE_Bussiness.Service.PostService;
using EXE_Data.Data.Entity;
using EXE_Data.Infrastructure;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860
//||==========================================================================||
//|| mấy cái đơn giản thì không cần dùng service mà chỉ cần dùng unit of work ||
//||==========================================================================||
namespace EXE_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        IUnitOfWork _unitOfWork;
        private readonly IPostService _postService;

        public PostController(IUnitOfWork unitOfWork, IPostService postService)
        {
            this._unitOfWork = unitOfWork;
            this._postService = postService;
        }
        // GET: api/<PostController>
        [HttpGet("list")]
        public IActionResult GetAll()
        {
            var posts = _unitOfWork.PostRepository.GetAll();
            List<PostDTO> postDTOs = new List<PostDTO>();
            foreach(var post in posts)
            {
                postDTOs.Add(post.ToDTO());
            }
            return Ok(postDTOs);
        }

        // GET api/<PostController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetByIdAsync(string id)
        {
            Ulid ulid = Ulid.Parse(id);
            Post post = await _unitOfWork.PostRepository.GetByIdAsync(ulid);
            if(post == null)
            {
                return NotFound();
            }
            return Ok(post.ToDTO());
        }

        // POST api/<PostController>
        [HttpPost("add")]
        public async Task<IActionResult> AddPost([FromBody] PostDTO postDTO)
        {
            Post post = postDTO.ToEntity();
            _unitOfWork.PostRepository.AddAsync(post);
            await _unitOfWork.SaveChangesAsync();
            return Ok();
        }

        // PUT api/<PostController>/5
        [HttpPut("{id}/update")]
        public async Task<IActionResult> UpdateById(string id, PostDTO postDTO)
        {
            Post post = await _unitOfWork.PostRepository.GetByIdAsync(Ulid.Parse(id));
            if(post == null)
            {
                return NotFound();
            }
            post = postDTO.ToEntity();

            _unitOfWork.PostRepository.Update(post);
            await _unitOfWork.SaveChangesAsync();
            return Ok();
        }

        // DELETE api/<PostController>/
        [HttpDelete("{id}/delete")]
        public async Task<IActionResult> DeleteById(string id)
        {
            Post post = _unitOfWork.PostRepository.GetById(Ulid.Parse(id));
            if(post == null)
            {
                return NotFound();
            }
            _unitOfWork.PostRepository.Delete(post);
            await _unitOfWork.SaveChangesAsync();
            return Ok();
        }

        // Filter api/<PostController>/filter
        public async Task<IActionResult> Filter([FromBody] PostFilter postFilter)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest();
            }
            return Ok(_postService.Filter(postFilter));
        }
    }
}
