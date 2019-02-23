import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable({
  providedIn: 'root'
})
export class ClassementService {

  constructor() { }
  public data: any[] = [{
  equipe : '0',
  j : '5',
  p : '19'
  }, {
   equipe : '1',
   j : '6',
   p : '18'
  },
    {
      equipe : '2',
      j : '6',
      p : '18'
    },
    {
      equipe : '3',
      j : '6',
      p : '18'
    },
    {
      equipe : '4',
      j : '6',
      p : '18'
    },
    {
      equipe : '5',
      j : '6',
      p : '18'
    },
    {
      equipe : '6',
      j : '6',
      p : '18'
    },
    {
      equipe : '7',
      j : '6',
      p : '18'
    },
    {
      equipe : '8',
      j : '6',
      p : '18'
    },
    {
      equipe : '9',
      j : '6',
      p : '18'
    },
    {
      equipe : '10',
      j : '6',
      p : '18'
    },
    {
      equipe : '11',
      j : '6',
      p : '18'
    },
    {
      equipe : '12',
      j : '6',
      p : '18'
    },
    {
      equipe : '13',
      j : '6',
      p : '18'
    }

  ];

  getData(): any[] {
    console.log("here") ;
    return this.data ;
  }
  getColumns(): string[] {
    return ['equipe', 'j', 'p']; }

}
