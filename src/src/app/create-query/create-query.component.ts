import { Component, Input, OnInit, Output, Query } from '@angular/core';
import { QueryService } from '../Query.Service';
import {query} from '../Query'
import { ActivatedRoute, Router } from '@angular/router';
import {LoginComponent} from '../login/login.component'
import { LoginService } from '../login/login.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-query',
  templateUrl: './create-query.component.html',
  styleUrls: ['./create-query.component.css']
})
export class CreateQueryComponent implements OnInit {
  public queries:any=[];
  public errormsg;
  category:any=[];
  loginData:any;
  id:number;
  constructor(private queryService:QueryService,
    private router:Router,private rout:ActivatedRoute) { }
  query:query=new query();
  submitted=false;
  ngOnInit(): void {   
    this.queryService.getCategory()
    .subscribe(data=>this.category=data,
              error=>this.errormsg=error); 
              this.id = this.rout.snapshot.params['id'];
              console.log(this.id);

                     
  }
  save() {
   
    this.query.userofQueryEmployeeID=this.id;
    this.queryService
    .createQuery(this.query).subscribe(data => {
      console.log(data)
      this.query = new query();
    
    }, 
    error => console.log(error));
    
  }
  onSubmit() {
    this.submitted = true;
    this.save();    
  }
 
}
