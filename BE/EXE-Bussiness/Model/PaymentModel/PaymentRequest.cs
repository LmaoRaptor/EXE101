namespace EXE_Bussiness.Model.PaymentModel
{
	public class PaymentRequest
	{
		public string UserId { get; set; }
		public decimal Amount { get; set; }
		public string OrderTypeName { get; set; }


	}
}
