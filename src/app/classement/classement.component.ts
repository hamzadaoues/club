import { Component, OnInit } from '@angular/core';
import { ClassementService } from '../classement.service' ;
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-classement',
  templateUrl: './classement.component.html',
  styleUrls: ['./classement.component.css']
})
export class ClassementComponent implements OnInit {

  data: any[];
  columns: string[];

  constructor(private atService: ClassementService) { }

  public  equipe: any[] = ['CA Bizertin', 'Espérance S. de Tunis', 'CS Sfaxien', 'ES du Sahel', 'Stade Tunisien', 'US Tataouine', 'Club Africain', 'US Ben Guerdane', 'ES Metlaoui', 'Stade Gabésien', 'JS Kairouanaise', 'CS Hammam Lif', 'AS Gabès', 'US Monastir' ] ;

  ngOnInit() {
    this.data = this.atService.getData();
    this.columns = this.atService.getColumns() ;
    console.log(this.data) ;
  }

}
