using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularInvoice.Models
{
  public class InvoiceModel
  {
    public int InvoiceId { get; set; }
    public int ClientId { get; set; }
    public string ClientName { get; set; }
    public string Address { get; set; }
  }
}
