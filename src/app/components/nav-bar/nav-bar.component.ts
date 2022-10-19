import { Component, OnInit, ViewChild } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';
import { ArticleListComponent } from '../article-list/article-list.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  toggle: Boolean;
  constructor(private filterService: FilterService) {
    this.toggle = false;
  }

  ngOnInit(): void {}
  openMenu(): void {
    let x = Array.from(
      document.getElementsByClassName(
        'navBar-category'
      ) as HTMLCollectionOf<HTMLElement>
    );
    this.toggle = true;
    console.log(this.toggle);
    if (this.toggle) {
      for (var i = 1; i < x.length; i++) {
        x[i].style.display = 'block';
      }
      this.toggle = false;
    } else {
      for (var i = 1; i < x.length; i++) {
        x[i].style.display = 'none';
      }
      console.log(this.toggle);
    }
  }

  updateFilterTerm(filterTerm: string | null): void {
    if (filterTerm) {
      this.filterService.setFilterTerm(filterTerm);
    } else {
      this.filterService.removeFilterTerm();
    }
  }

  setCategory(category: string): void {
    this.filterService.setCategory(category);
  }
}
