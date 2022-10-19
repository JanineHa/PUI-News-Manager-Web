import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { LoginService } from 'src/app/services/login.service';
import { NewsService } from 'src/app/services/news.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginData: User
  isLoggedIn: Boolean

  constructor(private loginService: LoginService,  private newsService: NewsService) {
    this.loginData ={username: "", password: "", apikey : ""}
    this.isLoggedIn = false
   }


  ngOnInit(): void {
  }
  
  login(): void{
    this.loginService.login(this.loginData.username!, this.loginData.password!).subscribe((loggedInUser: User) => {
    this.newsService.setUserApiKey(loggedInUser.apikey!)
    console.log(loggedInUser.apikey) 
    this.isLoggedIn = true
  })
  }

  logOut() : void{
    this.loginData ={username: "", password: "", apikey : ""}
    this.isLoggedIn = false
  }
}
