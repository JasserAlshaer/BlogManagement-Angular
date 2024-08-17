import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MainServiceService } from 'src/app/backend/main-service.service';
import { SignupDTO } from 'src/app/dtos/backend-dtos/SignupDTO';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  input:SignupDTO= new SignupDTO()
  constructor(public router:Router,public backend:MainServiceService,
    public spinner: NgxSpinnerService,public toastr : ToastrService
  ){
    
  }
  CreateNewAccount(){
    if(this.input.name == undefined || this.input.name == ''){
      this.toastr.warning('Please Enter User name')
      return;
    }
    if(this.input.password == undefined || this.input.password == ''){
      this.toastr.warning('Please Enter Password')
      return;
    }
    if(this.input.email == undefined || this.input.email == ''){
      this.toastr.warning('Please Enter Email')
      return;
    }
    if(this.input.phone == undefined || this.input.phone == ''){
      this.toastr.warning('Please Enter Phone')
      return;
    }
    this.spinner.show()
    this.backend.Register(this.input).subscribe(res=>{
      this.spinner.hide()
      this.toastr.success('New Account has been Created')
      this.router.navigate(['/signin'])
    },err=>{
      this.spinner.hide()
      this.toastr.error('Failed To Create Account')
    })
  }
}
