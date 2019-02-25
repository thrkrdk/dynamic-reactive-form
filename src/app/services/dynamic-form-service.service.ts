import {Injectable} from '@angular/core';
import {ItemConfig} from '../models/item-config';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormServiceService {
  control: Subject<ItemConfig> = new Subject<ItemConfig>();

  constructor() {
  }

  getContol(): Observable<any> {
    return this.control.asObservable();
  }

  setControl(item: ItemConfig) {
    this.control.next(item);
  }
}
