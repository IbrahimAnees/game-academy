using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace A2.Models
{
    public class Order
    {

        [Required]
        public string UserName { get; set; }
        [Required]
        public long ProductId { get; set; }
    }
}
