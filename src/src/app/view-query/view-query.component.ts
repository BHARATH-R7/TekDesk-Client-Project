
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QueryService } from '../Query.Service';

@Component({
  selector: 'app-view-query',
  templateUrl: './view-query.component.html',
  styleUrls: ['./view-query.component.css']
})
export class ViewQueryComponent implements OnInit {
query:any=[];
category:any=[];
erromsg;
p:number=1;
count:number=5;
searchString:any;
empid:number;


  constructor(private queryService:QueryService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.empid=this.route.snapshot.params['id'];
    this.queryService.getQueries()
    .subscribe(data=>{
      
      for(const d of (data as any)){
        if(this.empid==d.userofQueryEmployeeID){
          this.query.push({
            queryID:d.queryID,
            cat:d.categoryCategoriesID,
            qContent:d.qContent,
            status:d.status,
            sContent:d.sContent,
            references:d.references
          });
      }
      }
    });

    this.queryService.getCategory()
    .subscribe(data=>this.category=data,
                error=>this.erromsg=error);
  

  }
 
  getCategory(id:number):string{
    let cat:string="";
    for(var c=0;c<this.category.length;c++)
    {
      if(id==this.category[c].categoriesID)
      {
        cat=this.category[c].catName;
      }
    }
  
   
    return cat;
    

  }
  deleteQuery(id: number) {
    this.router.navigate(['/deleteQuery',id]);
  }

  onUpdate(id:number)
  {
  
    this.router.navigate(['/update',id]);
  }
  onClick(id:number){
    this.router.navigate(['/viewQ',id]);
  }

}
