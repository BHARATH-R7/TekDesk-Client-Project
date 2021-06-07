import { Pipe, PipeTransform } from "@angular/core";
import { Category, query } from "../Query";

@Pipe({
    name:'catFilter'
})
export class CatFilterPipe implements PipeTransform{
    transform(cat:any,filtertext:string):any{
        if(!filtertext)
        {
            return cat;
        }
        return query? cat.filter(item=>(item.catName.search(new RegExp(filtertext,"i")))>-1):query;
    }
}