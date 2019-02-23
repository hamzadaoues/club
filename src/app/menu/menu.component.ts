import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 public temps: any ;
  constructor() { }

  ngOnInit() {
    setInterval(() => {this.temps = Date.now(); }, 1000);
  }

}
