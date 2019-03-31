import { Renk } from './renk';
import { Sehir } from './sehir';
import { Yakit } from './yakit';
import { Marka } from './marka';
import { Musteri } from './musteri';


export interface Doldur {

    yakitlar: Yakit[];
    markalar: Marka[];
    renkler: Renk[];
    sehirler: Sehir[];
    musteriler: Musteri[];




}
