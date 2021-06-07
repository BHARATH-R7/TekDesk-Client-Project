import { Component, Input, OnInit, Output } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginform;
employee:any;
errormsg;
invalidLogin:boolean=false;
message: any;
count=0; 
id:number;


  constructor(private formBuilder:FormBuilder,
    private router:Router,
    private loginservice:LoginService) { }
    

  ngOnInit() {
    this.loginform=this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.loginservice.getEmployees()
      .subscribe(data=>this.employee=data,
                error=>this.errormsg=error);
  }
  
  onSubmit(){
  
    for(var items=0;items<this.employee.length;items++)
    {
      if(this.employee[items].username==this.loginform.controls.username.value&&this.employee[items].password==this.loginform.controls.password.value)
      {
        console.log(this.employee[items].username);
        console.log(this.loginform.value);
        this.count=1;
        this.id=this.employee[items].employeeID;
        console.log(this.id);
        break;
      }
     
    }
    if(this.count==0)
    {
      alert("enter valid username and password");
    }
    else{
      
      this.router.navigate(['/Dashboard',this.id]);
    }
  
    
  }
  getloginData( loginData:any){
   const  logindata=({
      username:loginData.controls.username.value,
      password:loginData.controls.password.value
    }
  )
  }


}
