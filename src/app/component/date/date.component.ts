import {Component, OnInit} from '@angular/core';
import {ItemConfig} from '../../models/item-config';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  item: ItemConfig;
  fg: FormGroup;

  constructor() {
  }

  ngOnInit() {
    console.log(this.item);
  }

}
