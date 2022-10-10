import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/article';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
  articleList: Article[]

  constructor(private newsService: NewsService) {
    this.articleList = []
    this.getArticleList()
   }

  ngOnInit(): void { }

  getArticleList(): void {
    this.newsService.getArticles().subscribe(list => this.articleList = list)
  }

  removeArticle(id: any):void {
    if (window.confirm("Do you really want to delete this article?")) {
      this.newsService.deleteArticle(Number(id)).subscribe()
    }
  }
}
