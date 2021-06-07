import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { query } from '../Query';
import { QueryService } from '../Query.Service';

@Component({
  selector: 'app-delete-query',
  templateUrl: './delete-query.component.html',
  styleUrls: ['./delete-query.component.css']
})
export class DeleteQueryComponent implements OnInit {

  constructor(private queryService:QueryService,private route: ActivatedRoute,private router:Router) { }
  query:any;
  id:number;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.query = new query();
    this.queryService.getQueryByID(this.id)
      .subscribe(data => {
        console.log(data)
        this.query = data;
      }, error => console.log(error));
  }
  deleteQuery(id: number) {
    this.queryService.deleteQuery(id)
      .subscribe(
        data => {
          console.log(data);
          alert("Data Deleted Successfully");
          this.reloadData();
        },
        error => console.log(error));
  }
  reloadData() {
  
    this.router.navigate(['viewQuery']);
  }

}
