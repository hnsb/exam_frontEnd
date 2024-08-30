import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
categories=[
  {
    id:'',
    title:''
  }
]

  constructor(private cat:CategoryService) { }

  ngOnInit(): void {
    this.cat.categories().subscribe((data:any)=>
    {
       this.categories=data;
    });
    // (error)
  }

}
