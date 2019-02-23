import { Component, OnInit } from '@angular/core';
import { ArticleService} from '../article.service';
import { HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})


export class ArticleComponent implements OnInit {

  public article: any[];

  constructor(private artservice: ArticleService) { }

  ngOnInit() {
    console.log(this.article) ;
    this.artservice.getArticles().subscribe(data => this.article = data);
    console.log(this.article) ;
  }

}
