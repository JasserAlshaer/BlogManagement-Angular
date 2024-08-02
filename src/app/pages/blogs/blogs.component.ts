import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainServiceService } from 'src/app/backend/main-service.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {
  num:number= 1
  constructor(public router:Router,public backend:MainServiceService){}

  NavigteToDetails(id:number){
    this.router.navigate(['/details',++id])
  }
}
