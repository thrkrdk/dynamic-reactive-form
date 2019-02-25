import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ItemConfig} from '../../models/item-config';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DynamicFormServiceService} from '../../services/dynamic-form-service.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dynamic-reactive-form',
  exportAs: 'dynamicReactiveForm',
  templateUrl: './dynamic-reactive-form.component.html',
  styleUrls: ['./dynamic-reactive-form.component.css']

})
export class DynamicReactiveFormComponent implements OnInit, OnDestroy {

  @Input() items: ItemConfig[] = [];

  @Output() submit: EventEmitter<any> = new EventEmitter<any>();

  subscription: Subscription;

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private dfs: DynamicFormServiceService) {
    this.subscription = this.dfs.getContol().subscribe(cntrl => {
      if (cntrl.tip === 'button') {
        this.items.push(cntrl);
        return;
      }
      const control = this.fb.control(
        cntrl.deger,
        this.bindValidations(cntrl.validations || [])
      );
      this.form.addControl(cntrl.adi, control);
      this.items.push(cntrl);
    });
  }

  ngOnInit() {
    this.form = this.createControl();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.form.valid) {
      this.submit.emit(this.form.value);
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  createControl() {
    const group = this.fb.group({});
    this.items.forEach(it => {
      if (it.tip === 'button') {
        return;
      }
      const control = this.fb.control(
        it.deger,
        this.bindValidations(it.validations || [])
      );
      group.addControl(it.adi, control);

    });
    return group;
  }

  bindValidations(validations: any) {
    if (validations && validations.length > 0) {
      const validationList = [];
      validations.forEach(valid => {
        validationList.push(valid.validator);
      });
      return Validators.compose(validationList);
    }
    return null;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({onlySelf: true});
    });
  }

}
