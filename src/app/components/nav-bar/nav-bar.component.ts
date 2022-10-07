import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  openMenu(): void {
    let x: any;
    x = document.getElementById('navBar');
    if (x.className === 'navBar-container') {
      x.className += ' responsive';
    } else {
      x.className = 'navBar-container';
    }
  }
}
