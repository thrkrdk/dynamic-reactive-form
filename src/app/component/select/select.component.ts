import { Component, OnInit } from '@angular/core';
import {ItemConfig} from '../../models/item-config';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  item: ItemConfig;
  fg: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
