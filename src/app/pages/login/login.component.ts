import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginData = {
  username:'',
  password:''};
  constructor(private snack:MatSnackBar,private login:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  formSubmit()
  {
    console.log("login form submited")
  

  if(this.loginData.username.trim() == '' || this.loginData.password == null)
  {
      this.snack.open('Username is required !!','',
      {
        duration:3000,
      });
      return;
  }
  if(this.loginData.password.trim() == '' || this.loginData.password == null)
  {
      this.snack.open('Password is required !!','',
      {
        duration:3000,
      });
      return;
  }

  this.login.generateToken(this.loginData).subscribe(
    (data:any)=>
    {
      console.log("success")
      console.log(data);

      // login..
      this.login.loginUser(data.token);

      this.login.getCurrentUser().subscribe(
        (user)=>
        {
          this.login.SetUser(user);
          console.log(user);

          // redirct ....ADMIN:admin-dashbord
          // redirect ... NORMAL:normal-dashbord
          if(this.login.getUserRole()=="ADMIN")
          {
            // admin dashboard
            // window.location.href='/admin';
            this.router.navigate(['admin'])
            this.login.loginStatusSubject.next(true);
          }else if(this.login.getUserRole()=='NORMAL')
          {
            // Normal user dashboard
            // window.location.href='/user';
            this.router.navigate(['user/0'])
            this.login.loginStatusSubject.next(true);
          }else
          {
            this.login.logout();
          }
          
          


        }
      )


    });
   
  
}

}
