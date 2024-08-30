import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/Services/quiz.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {
id:any
quizzes=[{
  qId:'',
  title:'',
  description:'',
  numberOfQuestions:'',
  maxMarks:'',
  category:
  {
    title:''
  }

}]
  constructor(private _route:ActivatedRoute,private _quiz:QuizService) { }

  ngOnInit(): void {
    this.id=this._route.snapshot.params['id'];
    
      this._route.params.subscribe((params:any)=>
      {
        this.id=params['id'];
        if(this.id==0)
    {
       console.log("load the all quiz")
       this._quiz.getActiveQuizzes().subscribe((data:any)=>
       {
          this.quizzes=data;
          console.log(this.quizzes);
          
       }
      //  (error)
      )
    }else{
      console.log('load the specific quiz');
     this._quiz.getActiveQuizzesOfCategory(this.id).subscribe((data:any)=>
     {
      this.quizzes=data;
     }
    //  (error)
     )
    }
    
      })

    
  }

}
