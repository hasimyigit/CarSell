using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CarSell.Data.DTOs
{
    public class ArabaDTO
    {
        public int arabaId { get; set; }
        public int musteriId { get; set; }
        public int arabaYili { get; set; }
        public int arabaKm { get; set; }
        public string aciklama { get; set; }
        public decimal arabaFiyat { get; set; }
        public string arabaUrl { get; set; }
        public string yakitAd { get; set; }
        public string renkAd { get; set; }
        public string markaAd { get; set; }
        public string sehirAd { get; set; }

    }
}
