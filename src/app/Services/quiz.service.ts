import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }

  public quizzes()
  {
    return this.http.get(`${baseUrl}/quize/`)
  }
  // add quize 
  public addQuiz(quiz:any)
  {
    return this.http.post(baseUrl+'/quize/',quiz)
  }
  // delete quiz
  public deleteQuiz(qId:any)
  {
    return this.http.delete(`${baseUrl}/quize/${qId}`);
  }
  // get single quiz
  public getQuiz(qId:any)
  {
     return this.http.get(`${baseUrl}/quize/${qId}`);
  }

  // Update quiz
  public updateQuize(quiz:any)
  {
    return this.http.put(`${baseUrl}/quize/`,quiz);
  }
  // get quizzes of category
  public getQuzzesOfCategory(id:any)
  {
    return this.http.get(`${baseUrl}/quize/category/${id}`);
  }
  // get Active Quizzzes
  public getActiveQuizzes()
  {
     return this.http.get(`${baseUrl}/quize/active`);
  }
  // get active quizzes of category
  public getActiveQuizzesOfCategory(id:any)
  {
    return this.http.get(`${baseUrl}/quize/category/active/${id}`);
  }
}
