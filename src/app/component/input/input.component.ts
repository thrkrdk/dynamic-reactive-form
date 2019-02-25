import { Component, OnInit } from '@angular/core';
import {ItemConfig} from '../../models/item-config';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  item: ItemConfig;
  fg: FormGroup;

  constructor() { }

  ngOnInit() {
  }
}
