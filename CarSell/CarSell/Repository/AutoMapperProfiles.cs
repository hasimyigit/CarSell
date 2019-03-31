using AutoMapper;
using CarSell.Data.Classes;
using CarSell.Data.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CarSell.Repository
{
    public class AutoMapperProfiles:Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Araba, ArabaDTO>()
                .ForMember(dest => dest.markaAd,
                opt =>
                opt.MapFrom(src => src.ArabaMarka.markaAd))

                .ForMember(dest => dest.sehirAd,
                opt =>
                opt.MapFrom(src => src.Sehir.sehirAd))

                .ForMember(dest => dest.yakitAd,
                opt =>
                opt.MapFrom(src => src.ArabaYakit.yakitAd))

                .ForMember(dest => dest.renkAd,
                opt =>
                opt.MapFrom(src => src.ArabaRenk.renkAd));
            CreateMap<Musteri, MusteriDTO>();
            CreateMap<List<Musteri>, List<MusteriDTO>>();
        
            CreateMap<Musteri, LoginDTO>();


        }
    }
}
