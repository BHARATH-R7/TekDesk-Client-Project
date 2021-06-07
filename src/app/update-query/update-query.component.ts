import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { query } from '../Query';
import { QueryService } from '../Query.Service';
import { LoginService } from '../login//login.service';

@Component({
  selector: 'app-update-query',
  templateUrl: './update-query.component.html',
  styleUrls: ['./update-query.component.css']
})
export class UpdateQueryComponent implements OnInit {
  query:any;
  id:number;
  category:any=[];
  submitted=false;
  errormsg;
  employee:any;
  empid:number;
  constructor(private route: ActivatedRoute,private router: Router,
    private queryService: QueryService, private loginservice:LoginService) { }

  ngOnInit(): void {
    this.query = new query();

    this.id = this.route.snapshot.params['id'];
    this.queryService.getQueryByID(this.id)
      .subscribe(data => {
        console.log(data)
        this.query = data;
      }, error => console.log(error));
      
      this.queryService.getCategory()
      .subscribe(data=>this.category=data,
                error=>this.errormsg=error); 

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

  


  updateQuery() {
    this.queryService.updateQuery(this.id, this.query)
      .subscribe(data => {
        console.log(data);
        this.query = new query();
        alert("Updated successfully");
        this.gotoList();
      }, error => console.log(error));

   
  }

  onSubmit() {
    this.submitted = true;
    this.updateQuery();    
  }

  gotoList() {
    this.router.navigate(['/viewQuery']);
  }
  


}
