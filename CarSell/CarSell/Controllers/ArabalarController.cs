using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using CarSell.Data.Classes;
using CarSell.Data.DTOs;
using CarSell.Repository;
using Microsoft.AspNetCore.Mvc;

namespace CarSell.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArabalarController : ControllerBase
    {
        private IBaseRepository _rep;
        private IMapper _mapper;
        List<ArabaDTO> dtoAraba;
        public ArabalarController(IBaseRepository rep, IMapper mapper)
        {
            _mapper = mapper;
            _rep = rep;
        }
        [HttpGet("Liste")]
        public IActionResult GetCarsList()
        {
            var cars = _rep.GetArabalar();
           var carList = _mapper.Map<List<ArabaDTO>>(cars);

            return Ok(carList);
        }
        [HttpGet("GetCarById")]
        public IActionResult GetCarById(int id)
        {
            var cars = _rep.GetArabaById(id);
            var car = _mapper.Map<ArabaDTO>(cars);

            return Ok(car);
        }
        [HttpGet("GetMusteriById")]
        public IActionResult GetMusteriById(int id)
        {
            var musteri = _rep.GetMusteriById(id);
            var musteridto = _mapper.Map<MusteriDTO>(musteri);

            return Ok(musteridto);
        }
        [HttpPost("ArabaGuncelle")]
        public IActionResult ArabaGuncelle([FromBody]Araba araba)
        {

            _rep.Guncelle(araba);
            _rep.Kaydet();

            //var arabadto = _mapper.Map<ArabaDTO>(araba);
            return Ok();
        }
        [HttpPost("ArabaEkle")]
        public IActionResult ArabaEkle([FromBody]Araba araba)
        {

            _rep.Ekle(araba);
            _rep.Kaydet();

            
            return Ok();
        }
        [HttpPost("UyeOl")]
        public IActionResult UyeOl([FromBody]Musteri musteri)
        {

            _rep.Ekle(musteri);
            _rep.Kaydet();


            return Ok();
        }

        [HttpGet("ArabaDoldur")]
        public IActionResult Doldur()
        {

            var doldur = _rep.Doldur();
            return Ok(doldur);
        }
        [HttpPost("GirisYap")]
        public IActionResult GirisYap([FromBody]Musteri loginget)
        {

            var login = _rep.GirisYap(loginget);
            var logindto = _mapper.Map<MusteriDTO>(login);
            return Ok(logindto);
        }
        [HttpGet("getCarsByCityId")]
        public IActionResult getCarsByCityId(int id)
        {
          
            var arabalar = _rep.GetArabalarBySehirId(id);

            var arabaDTOs = _mapper.Map<List<ArabaDTO>>(arabalar);



            return Ok(arabaDTOs);
        }
        [HttpGet("getCarsByBrandId")]
        public IActionResult getCarsByBrandId(int id)
        {
            var arabalar = _rep.GetArabalarByMarkaId(id);
            var arabaDTOs = _mapper.Map<List<ArabaDTO>>(arabalar);

            return Ok(arabaDTOs);
        }

    }
}