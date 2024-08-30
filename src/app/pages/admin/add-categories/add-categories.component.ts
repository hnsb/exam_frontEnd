import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/Services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent implements OnInit {
category={
  title:'',
  description:''
}
  constructor(private _category:CategoryService,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }
  formSubmit()
  {
    if(this.category.title.trim()==''|| this.category.title==null)
    {
      this.snack.open('Title Required !!','',{
        duration:3000
      })
      return;
    }

    // all done 
    this._category.addCategory(this.category).subscribe((data)=>
    {
      Swal.fire('Success !!','Category is added successfully','success');
    },
    )
  }

}
