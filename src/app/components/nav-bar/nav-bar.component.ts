import { Component, OnInit, ViewChild } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';
import { ArticleListComponent } from '../article-list/article-list.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {

  constructor(private filterService: FilterService) { }

  ngOnInit(): void { }
  openMenu(): void {
    let x: any;
    x = document.getElementById('navBar');
    if (x.className === 'navBar-container') {
      x.className += ' responsive';
    } else {
      x.className = 'navBar-container';
    }
  }

  updateFilterTerm(filterTerm: string | null): void {
    if (filterTerm) {
      this.filterService.setFilterTerm(filterTerm)
    } else {
      this.filterService.removeFilterTerm()
    }
  }

  setCategory(category: string): void {
    this.filterService.setCategory(category)
   }
}
