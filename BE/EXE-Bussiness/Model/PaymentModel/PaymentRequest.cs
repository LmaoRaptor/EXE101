using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EXE_Bussiness.Model.PaymentModel
{
    public class PaymentRequest
    {
        public string UserId { get; set; }
        public decimal Amount { get; set; }
        public string OrderTypeName { get; set; }


    }
}
