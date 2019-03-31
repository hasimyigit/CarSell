using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CarSell.Data.Classes
{
    public class ArabaYakit
    {
        [Key]
        public int yakitId { get; set; }
        public string yakitAd { get; set; }
    }
}
