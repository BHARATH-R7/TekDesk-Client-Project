import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { query } from '../Query';
import { QueryService } from '../Query.Service';
import { LoginService } from '../login//login.service';

@Component({
  selector: 'app-delete-query',
  templateUrl: './delete-query.component.html',
  styleUrls: ['./delete-query.component.css']
})
export class DeleteQueryComponent implements OnInit {

  constructor(private queryService:QueryService,private route: ActivatedRoute,private router:Router, 
     private loginservice:LoginService) { }
  query:any;
  id:number;
  errormsg:any;
  employee:any;
  empid:number;

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
  
  deleteQuery(id: number) {
    this.queryService.deleteQuery(id)
      .subscribe(
        data => {
          console.log(data);
          alert("Data Deleted Successfully");
          this.reloadData();
        },
        error => console.log(error));
  }
  reloadData() {
  
    this.router.navigate(['viewQuery']);
  }

}
