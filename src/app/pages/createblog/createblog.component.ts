import { Component } from '@angular/core';
import { MainServiceService } from 'src/app/backend/main-service.service';

@Component({
  selector: 'app-createblog',
  templateUrl: './createblog.component.html',
  styleUrls: ['./createblog.component.css']
})
export class CreateblogComponent {
  constructor(public backend:MainServiceService){}
}
