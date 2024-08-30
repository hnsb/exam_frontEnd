import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/Services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {
quesId=0
title=''
question=
  {
    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:'',
  }

  constructor(private route:ActivatedRoute,private ques:QuestionService,
    private router:Router) { }

  ngOnInit(): void {
    this.quesId=this.route.snapshot.params['quesId']
    // alert(this.quesId)
    this.ques.getQuestion(this.quesId).subscribe(
      (data:any)=>
      {
         this.question=data
         console.log(this.question);
         
      }
      // (error)
    )
    
  }
  formSubmit()
  {
    this.ques.updateQuestion(this.question).subscribe((data)=>
    {
      Swal.fire('Success !!','question updated','success').then((e)=>
      {
        this.router.navigate(['/admin/quizzes/']);
      })
    })
  }

}
