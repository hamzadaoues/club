import { Injectable } from '@angular/core';
import  effectif from '../assets/effectif.json' ;

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor() {
  }
/*
  public data: any[] = [
    {

    {

      '1': '10'
      ,
      '2': '21'
      ,
      '3': '17'
      ,
      '4': '10'
    }
    ,
    {
      '1': '10',
      '2': '21',
      '3': '17',
      '4': '21'
    }
    ,
    {
      '1': '10',
      '2': '17'
    }

}

];
  */

public obj: any = {
  'live' : [
    {
      '1' : '17' ,
      '2' : '15'
    },
    {
      '1' : '26' ,
      '2' : '13',
      '3' : '7' ,
      '4' : '5'
    },
    {
      '1' : '20' ,
      '2' : '27',
      '3' : '2' ,
      '4' : '4'
    },
    {
      '1' : '16'
    }
  ],
  'previous' : [
    {
      '1' : '21' ,
      '2' : '21'
    },
    {
      '1' : '10' ,
      '2' : '17'
    },
    {
      '1' : '10' ,
      '2' : '21'
    }
  ],
  'next' : [
    {
      '1' : '17' ,
      '2' : '21'
    },
    {
      '1' : '10' ,
      '2' : '17'
    },
    {
      '1' : '10' ,
      '2' : '21'
    }
  ]


};

  getData(): any {
    return this.obj ;
  }
  getEffectif(): any[] {
    return effectif ;
  }
}
