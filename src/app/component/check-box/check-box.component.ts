import { Component, OnInit } from '@angular/core';
import {ItemConfig} from '../../models/item-config';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css']
})
export class CheckBoxComponent implements OnInit {
  item: ItemConfig;
  fg: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
