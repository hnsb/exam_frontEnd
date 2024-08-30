import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/Services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {
quizzes=[
  {
    qId:'',
    title:'',
    description:'',
    maxMarks:'',
    numberOfQuestions:'',
    active:'',
    category:{
      title:''
    }

  },
 

  
]
  constructor(private quiz:QuizService) { }

  ngOnInit(): void {

    this.quiz.quizzes().subscribe((data:any)=>
    {
      this.quizzes=data;
      console.log(this.quizzes);
    }
    // (error)
    );
  }
  // delete Quize
  deleteQuiz(qId:any)
  {
    Swal.fire({
      icon:'info',
      title:'Are you sure?',
      confirmButtonText:'Delete',
      showCancelButton:true
    }).then((result)=>
    {
      // delete
      if(result.isConfirmed)
      {
        {
          this.quiz.deleteQuiz(qId).subscribe((data:any)=>
          {
            this.quizzes=this.quizzes.filter((quiz)=>quiz.qId !=qId);
            Swal.fire('Success','Quize deleted','success');
          }
          // (error)
          )
          }
      }
    }
    )
  }

}
