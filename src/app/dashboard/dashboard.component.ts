import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { QueryService } from '../Query.Service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  id:number;
  employee:any;
  errormsg:string;
 
  constructor(private route: ActivatedRoute,private loginservice:LoginService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.loginservice.getEmpById(this.id)
      .subscribe(data=>this.employee=data,
                error=>this.errormsg=error);
                
               
                
  }

}
