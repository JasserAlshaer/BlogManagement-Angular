import { Component } from '@angular/core';
import { MainServiceService } from 'src/app/backend/main-service.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent {
  constructor(public backend:MainServiceService){}
}
