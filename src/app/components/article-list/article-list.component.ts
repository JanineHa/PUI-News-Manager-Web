import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';
import { FlashService } from 'src/app/services/flash.service';
import { Article } from 'src/app/interfaces/article';
import { LoginService } from 'src/app/services/login.service';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
  articleList: Article[]
  flashMessage: string | null

  constructor(private newsService: NewsService, private loginService: LoginService,
    private flashService: FlashService, private filterService: FilterService) {
    this.articleList = []
    this.flashMessage = flashService.getFlashMessage()
   }

  ngOnInit(): void {
    this.getArticleList()
   }

  getArticleList(): void {
    this.newsService.getArticles().subscribe(list => this.articleList = list)

  }

  userLogged(): Boolean {
    return this.loginService.isLogged()
  }

  removeArticle(id: any):void {
    if (window.confirm("Do you really want to delete this article?")) {
      this.newsService.deleteArticle(Number(id)).subscribe(response => {
        this.newsService.getArticles().subscribe(list => this.articleList = list)
        this.flashService.setFlashMessage("Article was removed successfully!")
        this.flashMessage = this.flashService.getFlashMessage()
      }, err => {
        this.flashService.setFlashMessage("An error occured!")
        this.flashMessage = this.flashService.getFlashMessage()
      })
    }
  }

  hideFlash(): void {
    this.flashService.removeFlashMessage()
    this.flashMessage = this.flashService.getFlashMessage()
  }

  getFilterTerm(): string {
    return this.filterService.getFilterTerm()
  }

  getCategory(): string {
    return this.filterService.getCategory()
  }
}
