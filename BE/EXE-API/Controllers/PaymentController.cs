using EXE_Bussiness.Model.PaymentModel;
using EXE_Bussiness.Model.VnPay;
using EXE_Bussiness.Service.VnPayService;
using Microsoft.AspNetCore.Mvc;

namespace EXE_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentController : ControllerBase
    {
        private readonly IVnPayService _vnPayService;
        private readonly ILogger<PaymentController> _logger;
        public PaymentController(IVnPayService vnPayService, ILogger<PaymentController> logger)
        {
            _vnPayService = vnPayService;
            _logger = logger;
        }
        [HttpPost]
        public async Task<IActionResult> CreatePaymentUrl([FromBody] PaymentRequest request)
        {
            var model = new PaymentInformationModel
            {
                Amount = request.Amount,
                Name = request.UserId,
                OrderDescription = request.OrderTypeName
            };
            _logger.LogInformation($"Amount {model.Amount}");
            var url = _vnPayService.CreatePaymentUrl(model, HttpContext);
            return Ok(url);
        }
        [HttpGet("GetResponse")]
        public async Task<IActionResult> PaymentCallbackVnPay()
        {
            var response = _vnPayService.PaymentExecute(Request.Query);
            return Ok(response);
        }
    }
}
