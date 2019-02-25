import {Component, ViewChild} from '@angular/core';
import {DynamicReactiveFormComponent} from './component/dynamic-reactive-form/dynamic-reactive-form.component';
import {ItemConfig} from './models/item-config';
import {Validators} from '@angular/forms';
import {Validator} from './models/validator';
import {BuilderComponent} from './component/builder/builder.component';
import {DynamicFormServiceService} from './services/dynamic-form-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(DynamicReactiveFormComponent) form: DynamicReactiveFormComponent;
  @ViewChild(BuilderComponent) builder: BuilderComponent;
  sonuc;
  items: Array<ItemConfig>;


  constructor(private dfs: DynamicFormServiceService) {
    this.items = new Array<ItemConfig>();
    // eğer uygulama açıldığında formun oluşması istenirse aşağıdaki comment bölümleri açılarak sonuç gözlemlenebilir.
//     let item: ItemConfig = new ItemConfig();
//     item.id = 'adi';
//     item.etiket = 'Adı';
//     item.adi = 'adi';
//     item.itemTipi = 'text';
//     item.tip = 'input';
//     item.validations.push(this.getZorunluValitator(item.etiket));
//     item.validations.push(this.getKarakterValidator(item.etiket));
//     this.control.push(item);
//
//     // Soyadi Alanı Tanımlanıyor
//     item = new ItemConfig();
//     item.id = 'soyadi';
//     item.etiket = 'Soyadı';
//     item.adi = 'soyadi';
//     item.itemTipi = 'text';
//     item.tip = 'input';
//     item.validations.push(this.getZorunluValitator(item.etiket));
//     item.validations.push(this.getKarakterValidator(item.etiket));
//     this.control.push(item);
//
//     // Email Alanı Tanımlanıyor
//     item = new ItemConfig();
//     item.id = 'email';
//     item.etiket = 'E-Posta';
//     item.adi = 'email';
//     item.itemTipi = 'mail';
//     item.tip = 'input';
//     item.validations.push(this.getZorunluValitator(item.etiket));
//     this.control.push(item);
//
//     // Şifre Alanı Tanımlanıyor
//     item = new ItemConfig();
//     item.id = 'sifre';
//     item.etiket = 'Şifre:';
//     item.adi = 'sifre';
//     item.itemTipi = 'password';
//     item.tip = 'input';
//     item.validations.push(this.getZorunluValitator(item.etiket));
//     this.control.push(item);
//
//     // İzin Alanı Tanımlanıyor
//     item = new ItemConfig();
//     item.id = 'izinTipi';
//     item.etiket = 'İzin Tipi:';
//     item.adi = 'izinTipi';
//     item.tip = 'radiobutton';
//     item.options = ['Yıllık İzin', 'Mazeret İzni'];
//     item.deger = 'Yıllık İzin';
//     this.control.push(item);
//
//     // İzin Nedeni;
//     item = new ItemConfig();
//     item.id = 'izinAciklama';
//     item.tip = 'select';
//     item.etiket = 'İzin Nedeniz';
//     item.adi = 'izinAciklama';
//     item.options = ['Hastalık', 'Yıllık İzin Kullanımı', 'Ölüm'];
//     item.validations.push(this.getZorunluValitator(item.etiket));
//     this.control.push(item);
//
//
//     // İl dışına çıklacak mı Alanı tanımlanıyor;
//     item = new ItemConfig();
//     item.id = 'ilDisi';
//     item.tip = 'checkbox';
//     item.etiket = 'İl Dışına  Çıkacak Mısınız?';
//     item.adi = 'ilDisi';
//     this.control.push(item);
//
// // izin başlangıç tarihi
//     item = new ItemConfig();
//     item.id = 'izinTarihi';
//     item.tip = 'date';
//     item.etiket = 'İzin Tarihi';
//     item.adi = 'izinTarihi';
//     item.validations.push(this.getZorunluValitator(item.etiket));
//     this.control.push(item);
//
//     // izin başlangıç saati
//     item = new ItemConfig();
//     item.id = 'izinSaat';
//     item.tip = 'input';
//     item.itemTipi = 'time';
//     item.etiket = 'İzin Başlangıç Saati';
//     item.adi = 'izinBaslangicSaati';
//     item.validations.push(this.getZorunluValitator(item.etiket));
//     this.control.push(item);
//
//     // Soyadi Alanı Tanımlanıyor.
//     item = new ItemConfig();
//     item.id = 'izinSure';
//     item.etiket = 'İzin Süre(Gün):';
//     item.adi = 'izinSure';
//     item.itemTipi = 'number';
//     item.tip = 'input';
//     item.deger = '1';
//     item.validations.push(this.getZorunluValitator(item.etiket));
//     this.control.push(item);
//
//     // Kaydet Butonu Tanımlanıyor
//     item = new ItemConfig();
//     item.id = 'kaydet';
//     item.tip = 'button';
//     item.itemTipi = 'submit';
//     item.validationKontol = true;
//     item.etiket = 'Kaydet';
//     this.control.push(item);
//
//     // Vazgeç Butonu Tanımlanıyor
//     item = new ItemConfig();
//     item.id = 'vazgec';
//     item.tip = 'button';
//     item.etiket = 'Vazgeç';
//     item.itemTipi = 'reset';
//     item.itemCssClass = 'btn btn-raised btn-danger';
//     this.control.push(item);

  }

  submit(value: any) {
    this.sonuc =value;
  }

  build(value: any) {
    // null alanları kalduruyoruz
    Object.keys(value).forEach(function (key) {
      if (value[key] && (value[key] as String).length === 0) {
        delete value[key];
      }
    });

    if (value.validations) {
      const validasyon: Array<Validator> = value.validations.map(x => {
        if (x === 'Zorunlu')
          return this.getZorunluValitator(value.etiket);
        else if (x === 'Mail')
          return this.getMailValidator();
        else if (x === 'Karakter')
          return this.getKarakterValidator(value.etiket);
      }).filter(x => {
        return x;
      });
      value.validations = validasyon;
    }

    this.dfs.setControl(value as ItemConfig);

    // Kaydet Butonu Tanımlanıyor
    if (value.kaydetEkle) {
      const kaydet: ItemConfig = new ItemConfig();
      kaydet.id = 'kaydet';
      kaydet.tip = 'button';
      kaydet.itemTipi = 'submit';
      kaydet.validationKontol = true;
      kaydet.etiket = 'Kaydet';
      this.dfs.setControl(kaydet);
    }

    // Vazgeç Butonu Tanımlanıyor
    if (value.vazgecEkle) {
      const vazgec = new ItemConfig();
      vazgec.id = 'vazgec';
      vazgec.tip = 'button';
      vazgec.etiket = 'Vazgeç';
      vazgec.itemTipi = 'reset';
      vazgec.itemCssClass = 'btn btn-raised btn-danger';
      this.dfs.setControl(vazgec);
    }


  }

  getZorunluValitator(itemLabel: String): Validator {
    const val: Validator = new Validator();
    val.adi = 'required';
    val.validator = Validators.required;
    val.mesaj = itemLabel + ' Alanı Zorunludur';
    return val;
  }

  getKarakterValidator(itemLabel: String): Validator {
    const val: Validator = new Validator();
    val.adi = 'pattern';
    val.validator = Validators.pattern('^[a-zA-Z]+$');
    val.mesaj = itemLabel + ' Alanına Sadece Harf Girebilirsiniz';
    return val;
  }

  getMailValidator(): Validator {
    const val: Validator = new Validator();
    val.adi = 'pattern';
    val.validator = Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$');
    val.mesaj = 'Girilen Email Hatalı';
    return val;
  }
}
