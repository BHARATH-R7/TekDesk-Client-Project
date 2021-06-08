import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Observable} from 'rxjs';
import { Employee } from "./Employee";

@Injectable({
    providedIn:'root'
})
export class LoginService{

    constructor(private http:HttpClient){}
private url="https://localhost:44308/api/Employees";

login(loginData):Observable<Employee>{
    return this.http.post<Employee>(this.url,loginData);
}
getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url);
}
getEmpById(id: number): Observable<any> {
          
    return this.http.get(`${this.url}/${id}`);

  }
}
