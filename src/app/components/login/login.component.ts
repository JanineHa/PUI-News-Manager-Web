import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { LoginService } from 'src/app/services/login.service';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginData: User

  constructor(private loginService: LoginService,  private newsService: NewsService) {
    this.loginData ={username: "", password: "", apikey : ""}
   }


  ngOnInit(): void {
  }

  login(): void{
    this.loginService.login(this.loginData.username!, this.loginData.password!).subscribe()
  }

  logout(): void {
    this.loginService.logout()
  }

  userIsLogged(): Boolean {
    return this.loginService.isLogged()
  }
}
