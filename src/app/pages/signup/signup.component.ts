import { Component, OnInit } from '@angular/core';
import { AnimationDurations } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { UserService } from 'src/app/Services/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService, private snack:MatSnackBar) { }
  public user = {
    username:'',
    password:'',
    fname:'',
    lname:'',
    email:'',

  };

  ngOnInit(): void {
   
  
  }
  formSubmit()
  {
   
    console.log(this.user);
    if(this.user.username==''||this.user.username==null)
    {
      this.snack.open('username is required !!','',{duration:3000,
      });
    }
     //validate
    
   this.userService.addUser(this.user).subscribe(
     (data)=>
     {
       console.log(data);
      //  alert('success');
      Swal.fire('Successfully done !!','User is registerd','success')
      },
     
      
   );
  }

}
