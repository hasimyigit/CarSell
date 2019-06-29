# CarSell (Single Page Application)
Web ve Mobil programlama kursumun bitirme projesi olarak yapmış olduğum CarSell projesidir.
Projenin amacı Sahibinden.com'un sadece araba alım satım versiyonudur.

İlk adım olarak ASP.NET Core 2.2 projesi oluşturuldu.
CODE FİRST =>
Projenin içerisine 'DATA' klasörü eklendi ve bu klasörün içerisine alt klasör 'Classes' ve 'DTOs' klasörleri eklendi.
Classes klasörünün içerisine gerekli Tablolar(Araba,Müsteri vb.) oluşturuldu.
Data klasörünün içerisine DataContext sınıfı eklenip DbContext sınıfıdan kalıtım alındı.
Package Manager Console' dan Migration yapıldı.

Projenin içerisine Repository klasörü eklendi.
Bu klasör içerisinde IBaseRepository ve BaseRepository sınıfları CRUD vb işlemler için eklendi.
Gerekli işlem imzaları IBaseRepository interface'i içerisine yazıldı ve BaseRepository sınıfına iplemente edildi.
BaseRepository sınıfı içerisine imzaların operasyonları yazıldı.

WepApi için gerekli olan DTO klasörünün içerisine sınıflar(ArabaDoldur vb.) eklendi ve AutoMapper sayesinde veritabanındaki veriler ile birbirine Maplendi.

Projenin tasarımında Bootstrap 4 kullanıldı.
Angular 7 sayesinde hızlı dinamik ve SinglePage bir proje oldu.
