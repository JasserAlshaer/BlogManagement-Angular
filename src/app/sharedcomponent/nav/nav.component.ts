import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  IsloggedIn :boolean = false;
  IsloggedInAsAdmin :boolean = false;
  constructor(public router:Router){}
  NaivageteToLogin(){
    this.router.navigate(['/signin'])
  }
  NaivageteToClientDashboard(){
    this.router.navigate(['/manage-blog-client'])
  }
  NaivageteToAdminDashboard(){
    this.router.navigate(['/manage-blog-admin'])
  }
}
