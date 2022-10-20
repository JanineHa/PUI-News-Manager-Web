import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashService } from 'src/app/services/flash.service';
import { Article } from 'src/app/interfaces/article';
import { LoginService } from 'src/app/services/login.service';
import { NewsService } from 'src/app/services/news.service';
import { ArticleListComponent } from '../article-list/article-list.component';
import * as _ from 'lodash';

@Component({
  selector: 'app-article-edition',
  templateUrl: './article-edition.component.html',
  styleUrls: ['./article-edition.component.scss'],
})
export class ArticleEditionComponent implements OnInit {
  article: Article;
  imageError: string | null;
  isImageSaved: boolean;
  cardImageBase64: string | null;

  @ViewChild('articleForm') emailForm: any;

  constructor(
    private newsService: NewsService,
    private loginService: LoginService,
    private flashService: FlashService,
    @Inject(ActivatedRoute)
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.article = {
      title: '',
      subtitle: '',
      category: '',
      abstract: '',
      update_date: '',
      username: '',
      image_data: '',
      image_media_type: '',
    };
    this.imageError = null;
    this.isImageSaved = false;
    this.cardImageBase64 = '';

    if (this.route.snapshot.paramMap.get('id')) {
      this.newsService
        .getArticle(Number(this.route.snapshot.paramMap.get('id')))
        .subscribe((article) => (this.article = article));
    }
  }

  ngOnInit(): void {}

  save() {
    this.newsService.createArticle(this.article!).subscribe((x) => {
      this.router.navigate(['']);
      this.flashService.setFlashMessage(
        'Your article has been saved successfully!'
      );
    });
  }

  userLogged(): Boolean {
    return this.loginService.isLogged();
  }

  fileChangeEvent(fileInput: any) {
    this.imageError = null;
    if (fileInput.target.files && fileInput.target.files[0]) {
      // Size Filter Bytes
      const max_size = 20971520;
      const allowed_types = ['image/png', 'image/jpeg'];

      if (fileInput.target.files[0].size > max_size) {
        this.imageError = 'Maximum size allowed is ' + max_size / 1000 + 'Mb';

        return false;
      }

      if (!_.includes(allowed_types, fileInput.target.files[0].type)) {
        this.imageError = 'Only Images are allowed ( JPG | PNG )';
        return false;
      }
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = (rs) => {
          const imgBase64Path = e.target.result;
          this.cardImageBase64 = imgBase64Path;
          this.isImageSaved = true;

          this.article.image_media_type = fileInput.target.files[0].type;
          this.article.image_data = reader.result?.toString().split(',')[1];
        };
      };

      reader.readAsDataURL(fileInput.target.files[0]);
    }
    return true;
  }

  removeImage() {
    this.cardImageBase64 = null;
    this.isImageSaved = false;
  }
}
