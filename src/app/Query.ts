import { Employee } from "./login/Employee";

export class query{
    queryID:number;
    qContent:string;
    status:string;
    sContent:string;
    references:string;
    userofQueryEmployeeID:number;
    categoryCategoriesID:number;
    userofQuery:Employee;
    category:Category;


}
 export class Category{
    CategoryID:number;
    CategoryName:string;
}