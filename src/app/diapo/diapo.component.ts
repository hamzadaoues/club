import { Component, OnInit } from '@angular/core';
import {FormationService} from '../formation.service';

@Component({
  selector: 'app-diapo',
  templateUrl: './diapo.component.html',
  styleUrls: ['./diapo.component.css']
})
export class DiapoComponent implements OnInit {

  constructor(private formation: FormationService) { }

  public hideDescription: boolean[] = new Array(40) ;
  public test = true ;
  data: any;
  effectif: any[];
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  public  match = 'live' ;
  fn() {
    this.match = 'previous' ;
    console.log(this.match);
  }
  ngOnInit() {
  this.data = this.formation.getData() ;
  this.effectif = this.formation.getEffectif() ;
  console.log(this.data['live']) ;
  for ( let i = 0; i < this.hideDescription.length; i++) { this.hideDescription[i] = true; }

      }


}
