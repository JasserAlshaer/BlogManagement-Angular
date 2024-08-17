import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MainServiceService } from 'src/app/backend/main-service.service';
import { DetailsDTO } from 'src/app/dtos/backend-dtos/DetailDTO';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent {
  blogId:number=0
  dto : DetailsDTO = new DetailsDTO()
  constructor(public backend:MainServiceService,public spinner:NgxSpinnerService
    ,public tostr:ToastrService,public router:Router,public route : ActivatedRoute
  ){}

  ngOnInit(){
    this.route.paramMap.subscribe((params: ParamMap) => {
      let parmId = params.get('blogId')
      if(parmId != null)
      this.blogId = parseInt(parmId)
    });

    this.spinner.show()
    this.backend.BlogDetails(this.blogId).subscribe(res=>{
      this.spinner.hide()
      this.dto = res
    },err=>{
      this.spinner.hide()
      this.tostr.error('Failed To Load Blog')
      this.router.navigate(['/blogs'])
    })
  }
}
