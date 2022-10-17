import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  filterTerm: string
  category: string

  constructor() {
    this.filterTerm = ""
    this.category = ""
  }

  getFilterTerm(): string {
    return this.filterTerm
  }

  setFilterTerm(filterTerm: string): void {
    this.filterTerm = filterTerm
  }

  removeFilterTerm(): void {
    this.filterTerm = ""
  }

  getCategory(): string {
    return this.category
  }

  setCategory(category: string): void {
    this.category = category
  }

}
