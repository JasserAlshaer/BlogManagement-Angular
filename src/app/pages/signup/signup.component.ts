import { Component } from '@angular/core';
import { MainServiceService } from 'src/app/backend/main-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(public backend:MainServiceService){}
}
