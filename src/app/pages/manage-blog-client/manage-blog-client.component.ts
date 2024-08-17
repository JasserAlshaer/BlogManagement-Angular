import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BlogDTO } from 'src/app/dtos/blogs/blogDto';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ConfirmDialogData } from 'src/app/dtos/confirmDialog/conifrmdialog';
import { ConfirmDialogComponent } from 'src/app/sharedcomponent/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { EditblogComponent } from '../editblog/editblog.component';
import { MainServiceService } from 'src/app/backend/main-service.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { BlogUserDTO } from 'src/app/dtos/backend-dtos/BlogUserDTO';
@Component({
  selector: 'app-manage-blog-client',
  templateUrl: './manage-blog-client.component.html',
  styleUrls: ['./manage-blog-client.component.css'],
})
export class ManageBlogClientComponent {
  displayedColumns: string[] = [
    'id',
    'name',
    'desc',
    'date',
    'status',
    'Actions',
  ];
  dataSource: MatTableDataSource<BlogUserDTO>;
  blogDTOArray: BlogUserDTO[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator(
    new MatPaginatorIntl(),
    ChangeDetectorRef.prototype
  );
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    public router: Router,
    public backend: MainServiceService,
    public spinner: NgxSpinnerService,
    public toastr: ToastrService
  ) {
    this.dataSource = new MatTableDataSource();
    this.sort = new MatSort();
  }

  ngOnInit() {
    this.spinner.show();
    let userId = localStorage.getItem('userId');
    if (userId != null)
      this.backend.GetUserBlogByUserId(parseInt(userId)).subscribe(
        (res) => {
          this.spinner.hide();
          this.blogDTOArray = res;
          this.dataSource.data = this.blogDTOArray;
        },
        (err) => {
          this.spinner.hide();
        }
      );
    else this.spinner.hide();
    //fill table
  }

  ngAfterViewInit() {
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



  LogoutFuncationaity() {
    this.spinner.show();
    this.backend.Logout();
  }
  backToHome() {
    this.router.navigate(['']);
  }

  CreateNewBlog() {
    this.router.navigate(['/create-blog']);
  }

  EditBlog(item: BlogUserDTO) {
    const updateref = this.dialog.open(EditblogComponent, {
      width: '700px',
      data: item,
    });
    updateref.afterClosed().subscribe((result) => {
      this.spinner.show();
      let userId = localStorage.getItem('userId');
      if (userId != null)
        this.backend.GetUserBlogByUserId(parseInt(userId)).subscribe(
          (res) => {
            this.spinner.hide();
            this.blogDTOArray = res;
            this.dataSource.data = this.blogDTOArray;
          },
          (err) => {
            this.spinner.hide();
          }
        );
    });
  }
  DeleteBlog(blogId: number) {
    let info = new ConfirmDialogData(
      'Are You Sure ?',
      'Are You Want To Delete This Blog'
    );
    const dialogres = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: info,
    });

    dialogres.afterClosed().subscribe((result) => {
      if (result) {
        this.spinner.show();
        this.backend.DeleteBlog(blogId).subscribe(
          (res) => {
            this.spinner.hide();
            this.toastr.success('deleted succefully');
            let userId = localStorage.getItem('userId');
            if (userId != null)
              this.backend.GetUserBlogByUserId(parseInt(userId)).subscribe(
                (res) => {
                  this.spinner.hide();
                  this.blogDTOArray = res;
                  this.dataSource.data = this.blogDTOArray;
                },
                (err) => {
                  this.spinner.hide();
                }
              );
          },
          (err) => {
            this.spinner.hide();
            this.toastr.error('delete failed');
          }
        );
      } else {
      }
    });
  }
}
