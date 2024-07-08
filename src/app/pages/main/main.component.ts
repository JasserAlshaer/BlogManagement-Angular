import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  //connection with API 
  constructor(public api:HttpClient){}

  ngOnInit(){
    //the first called method in component 
    console.log('ngOnInit')
    this.api.get('https://localhost:44363/api/Users/GetSubscribtions')
    .subscribe(res=>{
      //handling for success response
      console.log('this is a response')
      console.log(res)
    },err=>{
      //handling for error response
      console.log('this is an error')
      console.log(err)
    })
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
