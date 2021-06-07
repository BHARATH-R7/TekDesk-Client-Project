import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateQueryComponent } from './create-query/create-query.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteQueryComponent } from './delete-query/delete-query.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { LoginComponent } from './login/login.component';
import { PostSolutionComponent } from './post-solution/post-solution.component';
import { UpdateQueryComponent } from './update-query/update-query.component';
import { ViewQueryByIdComponent } from './view-query-by-id/view-query-by-id.component';
import { ViewQueryComponent } from './view-query/view-query.component';


const routes: Routes = [
  
  {path:'login' ,component:LoginComponent},
  {path:'postQuery/:id',component:CreateQueryComponent},
  {path:'viewQuery/:id',component:ViewQueryComponent},
  {path:'update/:id',component:UpdateQueryComponent},
  {path:'viewQ/:id',component:ViewQueryByIdComponent},
  {path:'postSolution',component:PostSolutionComponent},
  {path:'Dashboard/:id', component:DashboardComponent},
  {path:'fp',component:FirstPageComponent},
  {path:'deleteQuery/:id',component:DeleteQueryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
