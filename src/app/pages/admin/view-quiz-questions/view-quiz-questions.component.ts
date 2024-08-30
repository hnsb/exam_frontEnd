import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/Services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit {
  
  qId=''
  title=''
  questions=[
    {
      quesId:'',
      content:'',
      option1:'',
      option2:'',
      option3:'',
      option4:'',
      answer:''

    }
  ];
  constructor(private route:ActivatedRoute,private ques:QuestionService,
    private snack:MatSnackBar) { }


  ngOnInit(): void {
    this.qId=this.route.snapshot.params['qId'];
    this.title=this.route.snapshot.params['title'];
    console.log(this.title);
    
   this.ques.getQuestionsOfQuiz(this.qId).subscribe((data:any)=>
   {
    this.questions=data;
   }
  //  (error)
   )
  }
  
  deleteQuestion(qId:any)
  {
   Swal.fire({
    icon:'info',
    showCancelButton:true,
    confirmButtonText:'Delete',
    title:'Are you sure ?'
    
   }).then((result)=>
   {
      if(result.isConfirmed)
      {
         this.ques.deleteQuestion(qId).subscribe((data:any)=>
         {
          this.snack.open('Question Deleted ..','',{
            duration:3000
          });
          this.questions=this.questions.filter((q) => q.quesId != qId)
         },
        // (error) 
         )
      }
   })
  }



}
