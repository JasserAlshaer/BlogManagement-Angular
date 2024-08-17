import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MainServiceService } from 'src/app/backend/main-service.service';
import { BlogCardDTO } from 'src/app/dtos/backend-dtos/BlogCardDTO';
import { SubscribtionDTO } from 'src/app/dtos/backend-dtos/SubscribtionDTO';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  myMainBlogs : BlogCardDTO[] = [];
  subsucribtions : SubscribtionDTO[]=[]
  constructor(public backend:MainServiceService,private router:Router,
    public spinner:NgxSpinnerService,
    public toastr:ToastrService
  ){}

  ngOnInit(){
    //the first called method in component 
    this.spinner.show()
    this.backend.GetAllBlogsMain().subscribe(
      res => {
        //complete call back 
        this.spinner.hide()
        this.myMainBlogs = res
        this.spinner.show()
        this.backend.GetAllSubscription().subscribe(
          (res2)=>{
            this.spinner.hide()
            this.subsucribtions = res2
            console.log(this.subsucribtions)
        },err2=>{
          this.spinner.hide()
          this.toastr.error('Something went wrong')
        }
      )
        //handling 
      },
      err =>{
        //error call back 
        this.spinner.hide()
        this.toastr.error('Something went wrong')
      }
    )    
  }

  ngAfterViewInit(){
    //the second 
    console.log('ngAfterViewInit')
    //the after called method 
  }

  ngOnDestroy(){
    console.log('ngOnDestroy')
    //the last method called in component
  }



}
