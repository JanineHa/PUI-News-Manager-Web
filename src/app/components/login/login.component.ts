import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { LoginService } from 'src/app/services/login.service';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  loginData: User;
  error: String;
  // username: 'DEV_TEAM_07', password: '123707@3'

  constructor(
    private loginService: LoginService,
    private newsService: NewsService
  ) {
    this.loginData = { username: '', password: '', apikey: '' };
    this.error = '';
  }

  ngOnInit(): void {}

  login(): void {
    this.loginService
      .login(this.loginData.username!, this.loginData.password!)
      .subscribe(
        (response) => {
          console.log('Login successful');
          this.error = '';
        },
        (error) => {
          console.error('Login unsuccessful');
          this.error = 'Login was unsuccessful. Please try again.';
        }
      );
  }

  logout(): void {
    this.loginService.logout();
    this.loginData = { username: '', password: '', apikey: '' };
  }

  userIsLogged(): Boolean {
    return this.loginService.isLogged();
  }
}
