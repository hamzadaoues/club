import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../article.service';
import {ActivatedRoute, Route} from '@angular/router';

@Component({
  selector: 'app-articlevue',
  templateUrl: './articlevue.component.html',
  styleUrls: ['./articlevue.component.css']
})
export class ArticlevueComponent implements OnInit {
 public article: any ;
 private  id: any ;
 public current: any ;
 private  i: any ;
 public top_rated: any[] = [{
   'image' : '1',
   'title' : 'Ligue des champions : Le Club africain perd ses 3 points\n',
   'view' : '33'
 }, {
   'image' : '2',
   'title' : 'Club Africain - Daniel Sanchez maintenu à la tête de l\'équipe, Khelifa reste au Parc A\n',
   'view' : '66'
 }] ;


  constructor(private articleservice: ArticleService, private  route: ActivatedRoute) { }

  ngOnInit() {
    this.i = 0;
    this.current = this.top_rated[this.i];
    this.id = this.route.snapshot.paramMap.get('id');
    this.articleservice.getArticle(this.id).subscribe(data => this.article = data);
  }

  next() {
    console.log('next article ') ;
    this.i ++ ;
    this.current = this.top_rated[this.i];
  }

  previous() {
 this.i-- ;
 this.current = this.top_rated[this.i];
  }

}
