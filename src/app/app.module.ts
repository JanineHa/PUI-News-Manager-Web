import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { ArticleEditionComponent } from './components/article-edition/article-edition.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    DetailPageComponent,
    LoginComponent,
    NavBarComponent,
    ArticleDetailsComponent,
    ArticleEditionComponent,
    ArticleListComponent,
    LoginPageComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
