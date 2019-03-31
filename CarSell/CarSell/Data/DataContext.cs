using CarSell.Data.Classes;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CarSell.Data
{
    public class DataContext:DbContext
    {
        public DataContext(DbContextOptions<DataContext> option) : base(option)
        {

        }
        public DbSet<Musteri> Musteriler { get; set; }
        public DbSet<Araba> Arabalar { get; set; }
        public DbSet<ArabaMarka> ArabaMarkalar { get; set; }
        public DbSet<ArabaRenk> ArabaRenkler { get; set; }
        public DbSet<ArabaYakit> ArabaYakitlar { get; set; }
        public DbSet<Sehir> Sehirler { get; set; }
    }
}
