using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using AngularInvoice.Models;
using Microsoft.AspNetCore.Mvc;

namespace AngularInvoice.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ValuesController : ControllerBase
  {
    private string connectionStr = "";
    // GET api/values
    [HttpGet]
    public ActionResult<IEnumerable<InvoiceModel>> Get()
    {
      var conn = new SqlConnection(connectionStr);
      conn.Open();
      var cmd = new SqlCommand("SELECT * from dbo.Invoices", conn);
      var rdr = cmd.ExecuteReader();
      var someList = new List<InvoiceModel>();


      foreach (DbDataRecord val in rdr)
      {
        someList.Add(new InvoiceModel
        {
          InvoiceId = Convert.ToInt32(val[0]),
          ClientName = val[1].ToString(),
          ClientId = Convert.ToInt32(val[2]),
          Address = val[3].ToString(),
        });
      }

      conn.Close();
      conn.Dispose();
      return someList;
    }

    // GET api/values/5
    [HttpGet("{id}")]
    public ActionResult<string> Get(int id)
    {
      return "value";
    }

    // POST api/values
    [HttpPost]
    public void Post([FromBody] string value)
    {
    }

    // PUT api/values/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody] string value)
    {
    }

    // DELETE api/values/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }
  }
}
