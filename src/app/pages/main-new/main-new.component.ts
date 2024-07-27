import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainServiceService } from 'src/app/backend/main-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main-new.component.html',
  styleUrls: ['./main-new.component.css',
    '../../../assets/css/tiny-slider.css',
    '../../../assets/css/aos.css',
    '../../../assets/css/glightbox.min.css',
    '../../../assets/css/style.css',
    '../../../assets/fonts/icomoon/style.css',
    '../../../assets/fonts/flaticon/font/flaticon.css',
    '../../../assets/css/flatpickr.min.css',
  ]
})
export class MainNewComponent {
  constructor(public backend:MainServiceService,private router:Router){}

  ngOnInit(){
    //the first called method in component 
    console.log('ngOnInit')
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
