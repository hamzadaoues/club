import { Component, OnInit } from '@angular/core';
import { DateFormatter} from '@angular/common/src/pipes/deprecated/intl';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-bienvenu',
  templateUrl: './bienvenu.component.html',
  styleUrls: ['./bienvenu.component.css']
})
export class BienvenuComponent implements OnInit {
 public temps: any;
  constructor() { }
  ngOnInit() {
    setInterval(() => {this.temps = Date.now(); }, 1000);
  }


}
