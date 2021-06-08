import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { QueryService } from '../Query.Service';
import { Solution } from '../Solution';
import { SolutionService } from '../Solution.Service';
import {CreateSolution} from '../CreateSolution'

@Component({
  selector: 'app-post-solution',
  templateUrl: './post-solution.component.html',
  styleUrls: ['./post-solution.component.css']
})
export class PostSolutionComponent implements OnInit {

 imageUrl:string="assets/Images/noimg.png";
 fileToUpload:File=null;
  public errormsg;
  queries:any=[];
  loginData:any;
  solution1:any;
  public solutionForQueryID:number;
  public sContent:string;
  public sol:CreateSolution;
  public response: {dbPath: ''};
  

  constructor(private solService:SolutionService,
    private router:Router,private http: HttpClient) { }


  submitted=false;
  
  ngOnInit(): void {   

    this.solService.getQueries()
    .subscribe(data=> this.queries=data,
      error=>this.errormsg=error); 
         
           
  }


  public onCreate = () => {
    this.sol = {
     
      sContent:this.sContent,
      references:this.response.dbPath,//to retreive image
      solutionForQueryID:this.solutionForQueryID
    }
    this.http.post('https://localhost:44308/api/Solutions', this.sol)
    .subscribe(res => {
      console.log(res)
    });

    this.submitted = true;
    this.gotoList();
   
  }
  public uploadFinished= (event:any) => {
    this.response = event;
    console.log(this.response);
  }
  gotoList() {
    this.router.navigate(['/viewQuery']);
  }

}
