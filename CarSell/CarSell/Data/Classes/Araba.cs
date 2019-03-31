using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CarSell.Data.Classes
{
    public class Araba
    {
        public int arabaId { get; set; }
        public int arabaYili { get; set; }
        public int arabaKm { get; set; }
        public string aciklama { get; set; }
        public decimal arabaFiyat { get; set; }
        public string arabaUrl { get; set; }

        [ForeignKey("musteriId")]
        public Musteri Musteri { get; set; }
        public int musteriId { get; set; }

        [ForeignKey("markaId")]
        public ArabaMarka ArabaMarka { get; set; }
        public int markaId { get; set; }

        [ForeignKey("renkId")]
        public ArabaRenk ArabaRenk { get; set; }
        public int renkId { get; set; }

        [ForeignKey("yakitId")]
        public ArabaYakit ArabaYakit { get; set; }
        public int yakitId { get; set; }

        [ForeignKey("sehirId")]
        public Sehir Sehir { get; set; }
        public int sehirId { get; set; }
    }
}
