import {Validator} from './validator';

export class ItemConfig {
  id?: string;   // html kontolün id tag bilgisi
  etiket?: string;  // Kontrolün label bilgisi
  adi?: string;  // kontrolün name bilgisi
  itemTipi?: string;  // kontrolün tip bilgisi. (input, select, checkbox, button vb)
  options?: string[]; // radio buton veya select tipindeki kontrolün alabileceği değerlerin tutulacağı dizi
  tip: string; // input tipindeki kontrolün type alanındaki değeri. Bu değer; text, number, mail password time olabilir.
  deger?: any;  // kontrolün varsayılan değeri
  readonly?: boolean;  // kontrol readonly olacak ise kullanılacak değerdir.
  validationKontol?: boolean;  // butonlar için tüm validasyonlar tamamlanmadan aktif olma özelliğini kpatacak değişken
  itemCssClass?: string;  //yaratılan kontrolün  css class bilgisi
  formGroupCssClass?: string;  //yaratılan formun  css class bilgisi
  validations?: Array<Validator>;  //kontrollde yapılacak doğrulama bilgilerinin tutulduğu liste
  collections?: any;

  constructor() {
    this.validations = new Array<Validator>();
  }
}

