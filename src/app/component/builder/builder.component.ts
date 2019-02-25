import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {

  builder: FormGroup;
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  itemTipList = ['text', 'mail', 'password', 'time', 'number'];
  tipList = ['input', 'radiobutton', 'select', 'checkbox', 'date'];
  validations = ['Zorunlu', 'Mail', 'Karakter'];

  constructor(private  fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder = this.fb.group({
      id: ['', Validators.required],
      adi: ['', Validators.required],
      etiket: ['', Validators.required],
      tip: ['', Validators.required],
      itemTipi: [''],
      deger: [''],
      readonly: [''],
      itemCssClass: [''],
      formGroupCssClass: [''],
      options: [''],
      validations: this.fb.array([]),
      kaydetEkle: [''],
      vazgecEkle: ['']
    });

    this.validations.map((o, i) => {
      const control = new FormControl(i === 0);
      (this.builder.controls.validations as FormArray).push(control);
    });
  }


  onSubmit() {
    // Validasyondan gelen  true falseları istenilen şekilde ayarlıyoruz
    this.builder.value.validations = this.builder.value.validations
      .map((v, i) => v ? this.validations[i] : null)
      .filter(v => v !== null);
    // combobox için girilen bilgileri diziye çeviriyoruz
    if (this.builder.value.options && (this.builder.value.options as String).length > 0)
      this.builder.value.options = this.builder.value.options.split(';');
    this.submit.emit(this.builder.value);

    this.builder.reset();
  }

}
