using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CarSell.Data;
using CarSell.Data.Classes;
using CarSell.Data.DTOs;
using Microsoft.EntityFrameworkCore;

namespace CarSell.Repository
{
    public class BaseRepository : IBaseRepository
    {
        private DataContext _context;
        public BaseRepository(DataContext context)
        {
            _context = context;
        }

        public ArabaDoldur Doldur()
        {
            ArabaDoldur doldurs = new ArabaDoldur();
            doldurs.markalar = _context.ArabaMarkalar.ToList();
            doldurs.renkler = _context.ArabaRenkler.ToList();
            doldurs.sehirler = _context.Sehirler.ToList();
            doldurs.yakitlar = _context.ArabaYakitlar.ToList();
            doldurs.musteriler = _context.Musteriler.ToList();
            return doldurs;
        }

        public void Ekle<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public Araba GetArabaById(int arabaId)
        {
            var araba = _context.Arabalar.Include(a => a.ArabaMarka).Include(a => a.ArabaYakit).Include(a => a.Sehir).Include(a => a.ArabaRenk).FirstOrDefault(a => a.arabaId == arabaId);
            return araba;
        }

        public List<Araba> GetArabalar()
        {
            var arabalar = _context.Arabalar.Include(a => a.ArabaMarka).Include(a => a.ArabaYakit).Include(a => a.Sehir).Include(a => a.ArabaRenk).ToList();
            //var arabalar = _context.Arabalar.ToList();
            return arabalar;
        }

        public List<Araba> GetArabalarByMarkaId(int markaId)
        {
           var arabalar = _context.Arabalar.Where(x => x.markaId == markaId).Include(a => a.ArabaMarka).Include(a => a.ArabaYakit).Include(a => a.Sehir).Include(a => a.ArabaRenk).ToList();
            return arabalar;
        }

        public List<Araba> GetArabalarBySehirId(int sehirId)
        {
            var arabalar = _context.Arabalar.Where(x => x.sehirId == sehirId).Include(a => a.ArabaMarka).Include(a => a.ArabaYakit).Include(a => a.Sehir).Include(a => a.ArabaRenk).ToList();
            return arabalar;
        }

        public List<ArabaRenk> GetArabaRenk()
        {
            var renkler = _context.ArabaRenkler.ToList();
            return renkler;
        }

        public List<ArabaYakit> GetArabaYakit()
        {
            var yakitlar = _context.ArabaYakitlar.ToList();
            return yakitlar;
        }

        public List<ArabaMarka> GetMarkalar()
        {
          return  _context.ArabaMarkalar.ToList();
        }

        public Musteri GetMusteriById(int musteriId)
        {
            var musteri = _context.Musteriler.Find(musteriId);
            return musteri;
        }

        public List<Musteri> GetMusteris()
        {
            var musteriler = _context.Musteriler.ToList();
            return musteriler;
        }

        public List<Sehir> GetSehir()
        {
            var sehirler = _context.Sehirler.ToList();
            return sehirler;
        }

        public Musteri GirisYap(Musteri login)
        {
        var musteri = (Musteri)_context.Musteriler.Where(x=> x.kullaniciAdi == login.kullaniciAdi && x.kullaniciSifresi==login.kullaniciSifresi);
            if (musteri==null)
            {
                return musteri;
            }
            return musteri;

        }

        public void Guncelle<T>(T entity) where T : class
        {
            _context.Update(entity);
            
        }

        public void Kaydet()
        {
            _context.SaveChanges();
        }



        public void Sil<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }
    }
}
