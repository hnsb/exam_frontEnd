import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AddCategoriesComponent } from './pages/admin/add-categories/add-categories.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UpdateQuestionComponent } from './pages/admin/update-question/update-question.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { WelcomeComponent } from './pages/Admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { StartComponent } from './pages/user/start/start.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './Services/admin.guard';
import { NormalGuard } from './Services/normal.guard';

const routes: Routes = [
{path:'signup',component:SignupComponent,pathMatch:'full'},
{path:'login',component:LoginComponent,pathMatch:'full'},
{path:'home',component:HomeComponent,pathMatch:'full'},
{path:'navbar',component:NavbarComponent,pathMatch:'full'},
{path:'admin', component:DashboardComponent,canActivate:[AdminGuard],children:[
  {
    path:'',component:WelcomeComponent,
  },
  {
    path:'profile',component:ProfileComponent
  },
  {
    path:'categories',component:ViewCategoriesComponent
  },
  {
    path:'add-categories',component:AddCategoriesComponent
  },
  {
    path:'quizzes', component:ViewQuizzesComponent
  },
  {
    path:'add-quiz',component:AddQuizComponent
  },
  {
    path:'quiz/:qId',component:UpdateQuizComponent
  },
  {
    path:'view-questions/:qId/:title',component:ViewQuizQuestionsComponent
  },
  {
    path:'add-question/:qId/:title', component:AddQuestionComponent
  },
  {
    path:'question/:quesId',component:UpdateQuestionComponent
  }
]},
{path:'user', component:UserDashboardComponent,canActivate:[NormalGuard],children:[
  {
    path:':id',component:LoadQuizComponent
  },
  {
    path:'instructions/:qId',component:InstructionsComponent
  }
]},
{
  path:'start/:qId',component:StartComponent,canActivate:[NormalGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
