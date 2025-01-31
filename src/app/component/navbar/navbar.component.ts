import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  user = null;
  constructor(public login: LoginService) { }

  ngOnInit(): void {
    this.isLoggedIn=this.login.isloggedIn();
    this.user=this.login.getUser();
    this.login.loginStatusSubject.asObservable().subscribe((data)=>
    {
      this.isLoggedIn=this.login.isloggedIn();
      this.user=this.login.getUser();
    }
    )
  }
  public logout()
  {
    this.login.logout();
    window.location.reload();
  }

}
