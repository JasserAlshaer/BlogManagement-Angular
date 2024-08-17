import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MainServiceService } from 'src/app/backend/main-service.service';
import { BlogCardDTO } from 'src/app/dtos/backend-dtos/BlogCardDTO';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent {
  num: number = 1;
  blogs: BlogCardDTO[] = [];
  constructor(
    public router: Router,
    public backend: MainServiceService,
    public spinner: NgxSpinnerService,
    public tostr: ToastrService
  ) {}
  ngOnInit() {
    this.spinner.show();
    this.backend.GetAllBlogs().subscribe(
      (res) => {
        //next call back
        this.spinner.hide();
        //debugger
        this.blogs = res;
      },
      (err) => {
        this.spinner.hide();
        this.tostr.error('Something Went Wrong');
      }
    );
  }
  NavigteToDetails(id: number | undefined) {
    if (id != undefined) this.router.navigate(['/details',id]);
  }
}
