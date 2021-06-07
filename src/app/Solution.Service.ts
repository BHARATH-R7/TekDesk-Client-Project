import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { query } from "./Query";
import { Solution } from "./Solution";

@Injectable({
    providedIn:'root'
})
export class SolutionService{
    private solUrl="https://localhost:44339/api/Solutions";
    private qUrl="https://localhost:44339/api/Queries";

    constructor(private http:HttpClient){}
    httpOptions={
        headers:new HttpHeaders({
            'Content-Type':'application/json','Authorization':'my-auth-token'
        })
    };

    getSolutions():Observable<Object>{
        return this.http.get<Solution[]>(this.solUrl);
    }
    errorHandler(error:HttpErrorResponse){
        return Observable.throw(error.message||"Server Error");
    }

    postSolution(sol:Solution):Observable<Object>{
        return this.http.post(`${this.solUrl}`,sol);
    }
    getQueries():Observable<Object>{
        return this.http.get<query[]>(this.qUrl);
    }


}