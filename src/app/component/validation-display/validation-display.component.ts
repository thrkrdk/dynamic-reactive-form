import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ItemConfig} from '../../models/item-config';

@Component({
  selector: 'app-validation-display',
  templateUrl: './validation-display.component.html',
  styleUrls: ['./validation-display.component.css']
})
export class ValidationDisplayComponent implements OnInit {

  @Input() fg: FormGroup;
  @Input() item: ItemConfig;

  constructor() {
  }

  ngOnInit() {
  }

}
