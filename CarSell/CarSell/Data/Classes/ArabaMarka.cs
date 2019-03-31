using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CarSell.Data.Classes
{
    public class ArabaMarka
    {
        [Key]
        public int markaId { get; set; }
        public string markaAd { get; set; }
    }
}
