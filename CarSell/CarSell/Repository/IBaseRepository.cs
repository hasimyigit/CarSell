using CarSell.Data.Classes;
using CarSell.Data.DTOs;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CarSell.Repository
{
    public interface IBaseRepository
    {
        void Ekle<T>(T entity) where T : class;
        void Sil<T>(T entity) where T : class;
        void Guncelle<T>(T entity) where T : class;
        void Kaydet();

        List<Musteri> GetMusteris();
        List<Araba> GetArabalar();
        Araba GetArabaById(int arabaId);
        Musteri GetMusteriById(int musteriId);
        List<ArabaMarka> GetMarkalar();
        List<ArabaRenk> GetArabaRenk();
        List<ArabaYakit> GetArabaYakit();
        List<Sehir> GetSehir();
        ArabaDoldur Doldur();
        Musteri GirisYap(Musteri login);
        List<Araba> GetArabalarBySehirId(int sehirId);
        List<Araba> GetArabalarByMarkaId(int markaId);



    }
}
