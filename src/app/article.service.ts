import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  public article: any[] ;

  constructor(private http: HttpClient) {

  }
   getArticles(): Observable<any[]> {
    return this.http.get<any>('http://localhost:8080/articles');
  }

  getArticle(id: any): Observable<any> {
    console.log('this is id ' + id) ;
    return this.http.get<any>('http://localhost:8080/article/' + id);
  }

}
