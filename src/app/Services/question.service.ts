import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

  // get questions
  public getQuestionsOfQuiz(qId:any)
  {
    return this.http.get(`${baseUrl}/question/quize/all/${qId}`);
  }
  public getQuestionsOfQuizForTest(qId:any)
  {
    return this.http.get(`${baseUrl}/question/quize/${qId}`);
  }
  // add Question
  public addQuestion(question:any)
  {
    return this.http.post(`${baseUrl}/question/`,question);
  }
  // delete Question
  public deleteQuestion(questionId:any)
   {
      return this.http.delete(`${baseUrl}/question/${questionId}`)
   }
  // get single Question
  public getQuestion(quesId:any)
  {
    return this.http.get(`${baseUrl}/question/${quesId}`);
  }
  // update question
  public updateQuestion(question:any)
  {
    return this.http.put(`${baseUrl}/question/`,question);
  }
  // eval Quiz
  public evalQuiz(questions:any)
  {
    return this.http.post(`${baseUrl}/question/eval-quiz`,questions);
  }
}
