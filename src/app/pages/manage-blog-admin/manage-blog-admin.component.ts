import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator, MatPaginatorIntl} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/sharedcomponent/confirm-dialog/confirm-dialog.component';
import { ConfirmDialogData } from 'src/app/dtos/confirmDialog/conifrmdialog';
import { MainServiceService } from 'src/app/backend/main-service.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { BlogUserDTO } from 'src/app/dtos/backend-dtos/BlogUserDTO';
@Component({
  selector: 'app-manage-blog-admin',
  templateUrl: './manage-blog-admin.component.html',
  styleUrls: ['./manage-blog-admin.component.css']
})
export class ManageBlogAdminComponent {
  displayedColumns: string[] = ['id', 'name','publisher','desc','date', 'status','Actions'];
  dataSource: MatTableDataSource<BlogUserDTO>;
  BlogUserDTOArray: BlogUserDTO[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog,
    public router: Router,
    public backend: MainServiceService,
    public spinner: NgxSpinnerService,
    public toastr: ToastrService

  ){
    this.dataSource = new MatTableDataSource()
    this.sort = new MatSort()
  }

  ngOnInit(){
    this.LoadData();
    ////fill table
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  LoadData(){
    this.spinner.show();
    let userId = localStorage.getItem('userId');
    if (userId != null)
      this.backend.GetUserBlogByUserId(-1).subscribe(
        (res) => {
          this.spinner.hide();
          this.BlogUserDTOArray = res;
          this.dataSource.data = this.BlogUserDTOArray 
        },
        (err) => {
          this.spinner.hide();
        }
      );
    else this.spinner.hide();
  }
  LogoutFuncationaity() {
    this.backend.Logout();
  }
  ChangeBlogStatus(blogId:number,status:boolean){
    let msg = status ?'Are You Want To Approved For This Blog':'Are You Want To Reject This Blog';
    let info = new ConfirmDialogData('Are You Sure ?',msg)
    this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data:info
    });
  }
}
