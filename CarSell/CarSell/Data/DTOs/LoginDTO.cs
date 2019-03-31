using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CarSell.Data.DTOs
{
    public class LoginDTO
    {
        public int musteriId { get; set; }
        public string kullaniciAdi { get; set; }
        public string kullaniciSifresi { get; set; }
    }
}
