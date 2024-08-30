import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';
import { QuizService } from 'src/app/Services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {
  constructor(private route:ActivatedRoute,private qs:QuizService,private cat:CategoryService,
    private router:Router ) { }
  qid=0;
  categories=[
    {
      id:10,
      title:'This is Static data'
    }];
  quizData={
    title:'',
    description:'',
    maxMarks:'',
    numberOfQuestions:'',
    active:true,
    category:{
      id:''
    }
  }
  ngOnInit(): void {
   
    this.qid=this.route.snapshot.params['qId'];
    // alert(this.qid)
    this.qs.getQuiz(this.qid).subscribe((data:any)=>
    {
      this.quizData=data;
      console.log(data)
    }
    // (error)
    );

    // load category
    this.cat.categories().subscribe((data:any)=>
    {
      this.categories=data;
    }
    // (error)
    )
  }
  //update form submit
  public updateData()
  {
    this.qs.updateQuize(this.quizData).subscribe((data:any)=>
    {
      Swal.fire('Success !!','quiz updated','success').then((e)=>
      {
        this.router.navigate(['/admin/quizzes']);
      })
    })
  }

}
