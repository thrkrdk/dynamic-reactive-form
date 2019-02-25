import {ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef} from '@angular/core';
import {ItemConfig} from '../../models/item-config';
import {FormGroup} from '@angular/forms';
import {InputComponent} from '../input/input.component';
import {ButtonComponent} from '../button/button.component';
import {SelectComponent} from '../select/select.component';
import {DateComponent} from '../date/date.component';
import {RadioButtonComponent} from '../radio-button/radio-button.component';
import {CheckBoxComponent} from '../check-box/check-box.component';

const cpmnntMapper = {
  button: ButtonComponent,
  input: InputComponent,
  date: DateComponent,
  select: SelectComponent,
  checkbox: CheckBoxComponent,
  radiobutton: RadioButtonComponent
};

@Directive({
  selector: '[appDynamicItem]'
})
export class DynamicItemDirective implements OnInit {
  @Input() item: ItemConfig;
  @Input() fg: FormGroup;
  componentRef: any;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {
  }

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(
      cpmnntMapper[this.item.tip]
    );
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.item = this.item;
    this.componentRef.instance.fg = this.fg;
  }
}
