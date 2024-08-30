import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/Services/category.service';
import { QuizService } from 'src/app/Services/quiz.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {
categories=[
  {
    id:10,
    title:'This is Static data'
  },
  {
    id:12,
    title:'You need check server'
  }
]

quizData={
  title:'',
  description:'',
  maxMarks:'',
  numberOfQuestions:'',
  active:true,
  category:{
    id:''
  }

};
  constructor(private cat:CategoryService,private snack:MatSnackBar,
    private quiz:QuizService) { }

  ngOnInit(): void {

    this.cat.categories().subscribe(
      (data:any)=>
      {
        // categories load
        this.categories=data;
        console.log(this.categories);
      }
      // (error)
    );
  }
  addQuiz()
  {
    if(this.quizData.title.trim()==''||this.quizData.title==null)
    {
      this.snack.open('Title is required !!','',{
        duration:3000
      });
      return;
    }

     this.quiz.addQuiz(this.quizData).subscribe(
      (data:any)=>
      {
        Swal.fire('Success','quize is added','success');
        this.quizData={
          title:'',
          description:'',
          maxMarks:'',
          numberOfQuestions:'',
          active:true,
          category:{
            id:''
          }
        
        };
      }
      //  (error)
      );
  }

}
