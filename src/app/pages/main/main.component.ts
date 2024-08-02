import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MainServiceService } from 'src/app/backend/main-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(public backend:MainServiceService,private router:Router,
    public spinner:NgxSpinnerService,
    public toastr:ToastrService
  ){}

  ngOnInit(){
    //the first called method in component 
    
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
