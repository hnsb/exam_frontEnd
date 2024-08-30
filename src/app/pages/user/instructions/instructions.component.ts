import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/Services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
qId=''

quizzes={
  title:'',
  description:'',
  numberOfQuestions:0,
  maxMarks:0,

}
  constructor(private _route:ActivatedRoute,private _quiz:QuizService,
    private _router:Router) { }

  ngOnInit(): void {
this.qId=this._route.snapshot.params['qId']
    this._quiz.getQuiz(this.qId).subscribe((data:any)=>
    {
       this.quizzes=data;
    }
    // (error)
    )
  }
  stratQuiz()
  {
    Swal.fire({
      title: 'Do you want to Start the Quiz?',
  
      showCancelButton: true,
      confirmButtonText: 'Start',
      denyButtonText: `Don't Start`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this._router.navigate(['/start/'+this.qId])
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

}
