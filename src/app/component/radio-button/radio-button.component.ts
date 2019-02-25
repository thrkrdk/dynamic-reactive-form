import { Component, OnInit } from '@angular/core';
import {ItemConfig} from '../../models/item-config';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css']
})
export class RadioButtonComponent implements OnInit {

  item: ItemConfig;
  fg: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
