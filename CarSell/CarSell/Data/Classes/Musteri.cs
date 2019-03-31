using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CarSell.Data.Classes
{
    public class Musteri
    {
        [Key]
        public int musteriId { get; set; }
        public string musteriAd { get; set; }
        public string musteriSoyad { get; set; }
        public string eMail { get; set; }
        public int musteriTelNo { get; set; }
        public string kullaniciAdi { get; set; }
        public string kullaniciSifresi { get; set; }
        
        public ICollection<Araba> Araba { get; set; }
    }
}
