import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BienvenuComponent } from './bienvenu/bienvenu.component';
import { MenuComponent } from './menu/menu.component';
import { DiapoComponent } from './diapo/diapo.component';
import { ArticleComponent } from './article/article.component';
import { VoteComponent } from './vote/vote.component';
import { ClassementComponent } from './classement/classement.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ArticlevueComponent } from './articlevue/articlevue.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'article/:id',
    component: ArticlevueComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BienvenuComponent,
    MenuComponent,
    DiapoComponent,
    ArticleComponent,
    VoteComponent,
    ClassementComponent,
    HomeComponent,
    ArticlevueComponent
  ],
  imports: [
    BrowserModule, NgbModule, HttpClientModule, AppRoutingModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
