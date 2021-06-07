import { analyzeAndValidateNgModules } from "@angular/compiler";
import { Pipe, PipeTransform } from "@angular/core";
import { query } from "../Query";

@Pipe({
    name:'ListFilter'
})
export class ListFilterPipe implements PipeTransform{
    transform(queries:any,filtertext:string):any{
        if(!filtertext)
        {
            return queries;
        }
        return query? queries.filter(item=>(item.qContent.search(new RegExp(filtertext,"i")))>-1
        ||item.status.search(new RegExp(filtertext,"i"))>-1
        ||item.sContent.search(new RegExp(filtertext,"i"))>-1
        ):query;
    }
}