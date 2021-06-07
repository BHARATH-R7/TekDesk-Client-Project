import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { QueryService } from '../Query.Service';
import { Solution } from '../Solution';
import { SolutionService } from '../Solution.Service';

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
  public querid:number;
  public sContent:string;
  public response:{ dbPath: ' ' };
  constructor(private solService:SolutionService,
    private router:Router) { }
  sol:Solution=new Solution();
  submitted=false;
  
  ngOnInit(): void {   
    this.solService.getQueries()
    .subscribe(data=>{
     
      for(const d of (data as any)){
        if(d.status=='OPEN'){
        this.queries.push({
          queryID:d.queryID,   
          qContent:d.qContent,
        });
      }
      }
    });
                     
  }
  save() {
    
    this.sol.references=this.fileToUpload.name;
   
    
    this.solService
    .postSolution(this.sol).subscribe(data => {
      console.log(data)
      this.sol = new Solution();
      this.gotoList();
    }, 
    error => console.log(error));
    
  }
  onSubmit() {
    this.submitted = true;
    this.save();    
  }
  gotoList() {
    //this.router.navigate(['/viewQuery']);
  }

  handleFileInput(file:FileList){
    this.fileToUpload=file.item(0);

    var reader=new FileReader();
    reader.onload=(event:any)=>{
      this.imageUrl=event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }
  public uploadFinished(event){
    this.response=event;
  }
}
