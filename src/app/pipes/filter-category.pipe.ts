import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '../interfaces/article';

@Pipe({
  name: 'filterCategory'
})
export class FilterCategoryPipe implements PipeTransform {

  transform(articleList: Article[], category: string): Article[] {
    if (category) {
      return articleList.filter(article => (article.category == category));
    } else {
      return articleList
    }
  }

}
