using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CarSell.Data.Classes
{
    public class Sehir
    {
        [Key]
        public int sehirId { get; set; }
        public string sehirAd { get; set; }
    }
}
