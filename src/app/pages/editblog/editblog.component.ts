import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MainServiceService } from 'src/app/backend/main-service.service';
import { BlogUserDTO } from 'src/app/dtos/backend-dtos/BlogUserDTO';
import { EditBlogDTO } from 'src/app/dtos/backend-dtos/EditBlogDTO';
import { BlogDTO } from 'src/app/dtos/blogs/blogDto';

@Component({
  selector: 'app-createblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.css']
})
export class EditblogComponent {
  input:EditBlogDTO = new EditBlogDTO()
  constructor(public dialogRef: MatDialogRef<EditblogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BlogUserDTO,
    public backend:MainServiceService,
    public tostr:ToastrService,public spinner:NgxSpinnerService
  ) {}

  SaveInfo(){
    this.input.id  = this.data.id
    this.input.imagePath = ''
    this.input.article = this.data.article
    this.input.title=this.data.title
    if(this.input.title == undefined || this.input.title ==''){
      this.tostr.warning('Title Is Required')
      return;
    }
    if(this.input.article == undefined || this.input.article ==''){
      this.tostr.warning('Article Is Required')
      return;
    }
    let userId = localStorage.getItem('userId')
    if(userId == null){
      this.tostr.warning('Must Logged In as Client')
      return;
    }else{
      this.spinner.show()
      this.backend.EditBlog(this.input).subscribe(res=>{
        this.spinner.hide()
        this.tostr.success('Update Successfully')
        this.dialogRef.close()
        //this.router.navigate(['/manage-blog-client'])
      },err=>{
        this.spinner.hide()
        this.tostr.error('Failed To Creat Blog')
        this.dialogRef.close()
      })
    }
  }
}
