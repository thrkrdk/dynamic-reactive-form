import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputComponent} from './component/input/input.component';
import {ButtonComponent} from './component/button/button.component';
import {SelectComponent} from './component/select/select.component';
import {DateComponent} from './component/date/date.component';
import {RadioButtonComponent} from './component/radio-button/radio-button.component';
import {CheckBoxComponent} from './component/check-box/check-box.component';
import {DynamicItemDirective} from './component/dynamic-item/dynamic-item.directive';
import {DynamicReactiveFormComponent} from './component/dynamic-reactive-form/dynamic-reactive-form.component';
import {ValidationDisplayComponent} from './component/validation-display/validation-display.component';
import {BuilderComponent} from './component/builder/builder.component';
import {DynamicFormServiceService} from './services/dynamic-form-service.service';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadioButtonComponent,
    CheckBoxComponent,
    DynamicItemDirective,
    DynamicReactiveFormComponent,
    ValidationDisplayComponent,
    BuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [DynamicFormServiceService],
  entryComponents: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadioButtonComponent,
    CheckBoxComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
