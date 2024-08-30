import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/Services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
qId:any;
marksGot=0;
attempted=0;
correctAnswer=0;

isSubmit=false
timmer=0;

questions=[
  {
    content:null,
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    givenAnswer:'',
    answer:'',

    quize:{
      qId:'',
      title:'',
      maxMarks:0
  }
}
];

  
  


  constructor( private locationSt:LocationStrategy,private _route:ActivatedRoute,
   private _quest:QuestionService,private _router:Router) { }

  ngOnInit(): void {
    this.preventBackButton();
    this.qId=this._route.snapshot.params['qId']
    // console.log(this.qId);
    this.loadQuestions();
    
  }
  loadQuestions()
  {
    this._quest.getQuestionsOfQuizForTest(this.qId).subscribe((data:any)=>
    {
      console.log(data);
      
      this.questions=data;
       this.timmer=this.questions.length*1.5*60;
    //  console.log(this.questions);
     this.startTimmer();
      
      
    }
    // (error)
    )
  }
  
preventBackButton()
{
  history.pushState(null,location.href);
  this.locationSt.onPopState(()=>{
    history.pushState(null,location.href);
  })
}

submitQuiz()
{
  Swal.fire({
    title:'Do you want to submit the quiz?',
    showCancelButton:true,
    confirmButtonText:'Submit',
    icon:'info'
  }).then((e)=>
  {
    this.isSubmit=true;
    if(e.isConfirmed)
    {
      this.evalQuiz();
    //  calculation
    }
  });
}

startTimmer()
{
  let t:any=window.setInterval(()=>
  {
    if(this.timmer<=0)
    {
      this.evalQuiz();
      clearInterval(t);
    }else{
      this.timmer--;
    }
  },1000)
}
getFormatedTime()
{
  let mm=Math.floor(this.timmer/60);
  let ss=this.timmer-mm*60;
  return `${mm} min:${ss} sec`
}
evalQuiz()
{

  this._quest.evalQuiz(this.questions).subscribe((data:any)=>
  {
    console.log(data);
    this.marksGot=data.marksGot;
    this.correctAnswer=data.correctAnswer;
    this.attempted=data.attempted;
    this.isSubmit=true;
    
  },
  // (error)
  );
  }

  pagePrint()
  {
    window.print();
  }
}

