
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { query } from '../Query';
import { QueryService } from '../Query.Service';
import { LoginService } from '../login//login.service';

@Component({
  selector: 'app-view-query-by-id',
  templateUrl: './view-query-by-id.component.html',
  styleUrls: ['./view-query-by-id.component.css']
})
export class ViewQueryByIdComponent implements OnInit {
query:any;
id:number;
errormsg:any;
employee:any;
empid:number;
imagedirectorypath:any="https://localhost:44317/api/FileUploads/";

  constructor(private queryService:QueryService,private route: ActivatedRoute,private router:Router,
     private loginservice:LoginService) { }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];
    
    this.query = new query();
    this.queryService.getQueryByID(this.id)
      .subscribe(data => {
        console.log(data)
        this.query = data;
      }, error => console.log(error));


      this.loginservice.getEmployees().subscribe(data=>this.employee=data,
        error=>this.errormsg=error);
                         

  }
   employee1(){
     for(var items=0; items<this.employee.length; items++){
       this.empid=this.employee[items].employeeID;
       console.log('employeeID =',this.empid);
       this.router.navigate(['/viewQuery',this.empid]);
     }
   }

 

  list(){
    this.router.navigate(['/viewQuery']);
  }
  public createImgPath = (serverPath: string) => {
    return `https://localhost:44339/${serverPath}`;
  }

}
