import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CreateQueryComponent } from './create-query/create-query.component';
import { ViewQueryComponent } from './view-query/view-query.component';
import { UpdateQueryComponent } from './update-query/update-query.component';
import { ViewQueryByIdComponent } from './view-query-by-id/view-query-by-id.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { PostSolutionComponent } from './post-solution/post-solution.component';
import { ViewSolutionsComponent } from './view-solutions/view-solutions.component'
import { ListFilterPipe } from './view-query/Search-pipe';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FirstPageComponent } from './first-page/first-page.component';
import { DefaultComponent } from './default/default.component';
import { DeleteQueryComponent } from './delete-query/delete-query.component';
import { CatFilterPipe } from './view-query/category_search';
import { UploadComponent } from './upload/upload.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateQueryComponent,
    ViewQueryComponent,
    UpdateQueryComponent,
    ViewQueryByIdComponent,
    PostSolutionComponent,
    ViewSolutionsComponent,
    ListFilterPipe,
    CatFilterPipe,
    DashboardComponent,
    FirstPageComponent,
    DefaultComponent,
    DeleteQueryComponent,
    UploadComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MDBBootstrapModule.forRoot()
    
   
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
