import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/article';
import { NewsService } from 'src/app/services/news.service';
import { ActivatedRoute } from '@angular/router';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {
  article: Article

  constructor(private newsService: NewsService,  @Inject(ActivatedRoute) private route : ActivatedRoute) {
    this.article = { title: "", subtitle: "", category: "", abstract: "", update_date: "", username: ""}
    this.newsService.getArticle(Number(this.route.snapshot.paramMap.get('id'))).subscribe(article => this.article = article)
   }

  ngOnInit(): void {
  }

}
