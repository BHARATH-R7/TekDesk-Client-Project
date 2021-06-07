
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { query } from '../Query';
import { QueryService } from '../Query.Service';

@Component({
  selector: 'app-view-query-by-id',
  templateUrl: './view-query-by-id.component.html',
  styleUrls: ['./view-query-by-id.component.css']
})
export class ViewQueryByIdComponent implements OnInit {
query:any;
id:number;
  constructor(private queryService:QueryService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];
    this.query = new query();
    this.queryService.getQueryByID(this.id)
      .subscribe(data => {
        console.log(data)
        this.query = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['/viewQuery']);
  }

}
