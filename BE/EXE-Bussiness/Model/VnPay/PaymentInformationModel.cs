using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EXE_Bussiness.Model.VnPay
{
    public class PaymentInformationModel
    {
        public decimal Amount { get; set; }
        public string OrderDescription { get; set; }
        public string Name { get; set; }
    }

}
