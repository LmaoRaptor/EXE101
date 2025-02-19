using EXE_Bussiness.Model.VnPay;
using Microsoft.AspNetCore.Http;

namespace EXE_Bussiness.Service.VnPayService
{
	public interface IVnPayService
	{
		string CreatePaymentUrl(PaymentInformationModel model, HttpContext context);
		PaymentResponseModel PaymentExecute(IQueryCollection collections);

	}
}
