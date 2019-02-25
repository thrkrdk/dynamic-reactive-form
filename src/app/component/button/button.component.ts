import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ItemConfig} from '../../models/item-config';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  item: ItemConfig;
  fg: FormGroup;


  constructor() {
  }

  ngOnInit() {
  }

}
