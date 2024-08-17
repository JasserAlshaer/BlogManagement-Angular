import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MainServiceService } from 'src/app/backend/main-service.service';
import { LoginDTO } from 'src/app/dtos/backend-dtos/LoginDTO';
import { jwtDecode } from 'jwt-decode'; 
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  input : LoginDTO = new LoginDTO()
  constructor(public router:Router,public backend:MainServiceService,
    public spinner: NgxSpinnerService,public toastr : ToastrService
  ){
    
  }
  Login(){
    if(this.input.userName == undefined){
      this.toastr.warning('Please Enter User name')
      return;
    }
    if(this.input.password == undefined){
      this.toastr.warning('Please Enter Password')
      return;
    }
    if(this.input.userName == ''){
      this.toastr.warning('User name Colud not be empty')
      return;
    }
    if(this.input.userName =='admin' && this.input.password=='123qwe'){
      //loginasadmin
      localStorage.setItem('isLoggedIn','true')
      localStorage.setItem('userId','none')
      localStorage.setItem('token','none')
      this.router.navigate(['/manage-blog-admin'])
    }else{
      this.spinner.show()
      this.backend.Login(this.input).subscribe(res=>{
        this.spinner.hide()
        localStorage.setItem('isLoggedIn','true')
        localStorage.setItem('token',res)
        let data: any = jwtDecode(res);
        localStorage.setItem('userId',data.UserId)
        this.router.navigate(['/manage-blog-client'])
      },err=>{
        this.spinner.hide()
        this.toastr.error('Wrong User name / Password')
      })
    }
  }
}
