using CarSell.Data.Classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CarSell.Data.DTOs
{
    public class ArabaDoldur
    {
        public List<ArabaYakit>  yakitlar { get; set; }
        public List<ArabaMarka> markalar { get; set; }
        public List<ArabaRenk> renkler { get; set; }
        public List<Musteri> musteriler { get; set; }
        public List<Sehir> sehirler { get; set; }
    }
}
