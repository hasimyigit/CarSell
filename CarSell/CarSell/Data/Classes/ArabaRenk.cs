using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CarSell.Data.Classes
{
    public class ArabaRenk
    {
        [Key]
        public int renkId { get; set; }
        public string renkAd { get; set; }
    }
}
