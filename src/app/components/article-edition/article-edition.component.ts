import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashService } from 'src/app/services/flash.service';
import { Article } from 'src/app/interfaces/article';
import { LoginService } from 'src/app/services/login.service';
import { NewsService } from 'src/app/services/news.service';
import { ArticleListComponent } from '../article-list/article-list.component';

@Component({
  selector: 'app-article-edition',
  templateUrl: './article-edition.component.html',
  styleUrls: ['./article-edition.component.scss']
})
export class ArticleEditionComponent implements OnInit {
  article: Article

  @ViewChild('articleForm') emailForm: any

  constructor(private newsService: NewsService, private loginService: LoginService, private flashService: FlashService, @Inject(ActivatedRoute)
    private route: ActivatedRoute, private router: Router) {
    this.article = { title: "", subtitle: "", category: "", abstract: "", update_date: "", username: ""}
    if (this.route.snapshot.paramMap.get('id')) {
      this.newsService.getArticle(Number(this.route.snapshot.paramMap.get('id'))).subscribe(article => this.article = article)
    }
  }

  ngOnInit(): void {}

  save() {
    this.newsService.createArticle(this.article!).subscribe(x => {
      this.router.navigate(['/'])
      this.flashService.setFlashMessage("Your article has been saved successfully!")
    })
  }

  userLogged(): Boolean {
    return this.loginService.isLogged();
  }
}
