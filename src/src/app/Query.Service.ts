import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable, Query } from "@angular/core";
import { Observable } from "rxjs";
import { Category, query } from "./Query";

@Injectable({
    providedIn:'root'
})
export class QueryService {
    private QueryUrl="https://localhost:44394/api/Queries";
    private CatUrl="https://localhost:44394/api/Categories";

    constructor(private http:HttpClient){}
    httpOptions={
        headers:new HttpHeaders({
            'Content-Type':'application/json','Authorization':'my-auth-toekn'
        })
    };


    getQueries():Observable<query[]>{
        return this.http.get<query[]>(this.QueryUrl);
    }
    getCategory():Observable<Category[]>{
        return this.http.get<Category[]>(this.CatUrl);
    }
    errorHandler(error:HttpErrorResponse){
        return Observable.throw(error.message||"Server error");
    }
    createQuery(query: query): Observable<Object> {
        return this.http.post(`${this.QueryUrl}`, query);
      }
    getQueryByID(id: number): Observable<any> {
          
        return this.http.get(`${this.QueryUrl}/${id}`);

      }
      updateQuery(id: number, value: any): Observable<Object> {
        return this.http.put(`${this.QueryUrl}/${id}`, value);
      }
      deleteQuery(id: number): Observable<any> {
        return this.http.delete(`${this.QueryUrl}/${id}`);
      }
    


}