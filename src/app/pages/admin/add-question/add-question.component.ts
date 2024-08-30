import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/Services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

qId=''
title=''
question={
  quize:{
     qId:'',
  },
  content:'',
  option1:'',
  option2:'',
  option3:'',
  option4:'',
  answer:'',
};
  constructor(private route:ActivatedRoute,private ques:QuestionService) { }

  ngOnInit(): void {

    this.qId=this.route.snapshot.params['qId']
    this.title=this.route.snapshot.params['title']
    this.question.quize['qId']=this.qId
    
  }
  formSubmit()
  {
    if(this.question.content.trim()==''||this.question.content==null)
    {
      return;
    }
    if(this.question.option1.trim()==''||this.question.option1==null)
    {
      return;
    }
    if(this.question.option2.trim()==''||this.question.option2==null)
    {
      return;
    }
    // Form Submit
    this.ques.addQuestion(this.question).subscribe((data:any)=>
    {
      Swal.fire('Success','Question is added','success')
      this.question.content='',
      this.question.option1='',
      this.question.option2='',
      this.question.option3='',
      this.question.option4='',
      this.question.answer=''
    }
    // (error)
    )
    // alert('testing');
  }

}
