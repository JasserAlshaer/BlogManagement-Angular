import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BlogDTO } from 'src/app/dtos/blogs/blogDto';
import {MatPaginator, MatPaginatorIntl} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/sharedcomponent/confirm-dialog/confirm-dialog.component';
import { ConfirmDialogData } from 'src/app/dtos/confirmDialog/conifrmdialog';
@Component({
  selector: 'app-manage-blog-admin',
  templateUrl: './manage-blog-admin.component.html',
  styleUrls: ['./manage-blog-admin.component.css']
})
export class ManageBlogAdminComponent {
  displayedColumns: string[] = ['id', 'name','publisher','desc','date', 'status','Actions'];
  dataSource: MatTableDataSource<BlogDTO>;
  blogDTOArray: BlogDTO[] = [
    new BlogDTO(1, 'The Future of AI: Trends to Watch', 'Explore the latest trends in AI and what they mean for the future.', new Date(), 'published'),
    new BlogDTO(2, 'How to Start a Tech Blog', 'A comprehensive guide to starting your own tech blog and building an audience.', new Date(), 'draft'),
    new BlogDTO(3, 'Top 10 Programming Languages in 2024', 'Discover the most popular programming languages in 2024 and their uses.', new Date(), 'published'),
    new BlogDTO(4, 'The Importance of Cybersecurity', 'Understand why cybersecurity is crucial in today’s digital age and how to protect yourself.', new Date(), 'draft'),
    new BlogDTO(5, 'Cloud Computing: Benefits and Challenges', 'An in-depth look at the advantages and challenges of cloud computing.', new Date(), 'published'),
    new BlogDTO(6, 'The Rise of Quantum Computing', 'Learn about quantum computing and its potential to revolutionize technology.', new Date(), 'draft'),
    new BlogDTO(7, 'Data Science for Beginners', 'An introduction to data science and its applications in various industries.', new Date(), 'published'),
    new BlogDTO(8, 'Building a Career in Tech', 'Tips and advice for building a successful career in the tech industry.', new Date(), 'draft'),
    new BlogDTO(9, 'Machine Learning: Applications and Trends', 'Explore the latest applications and trends in machine learning.', new Date(), 'published'),
    new BlogDTO(10, 'Understanding Blockchain Technology', 'A beginner’s guide to blockchain technology and its uses beyond cryptocurrencies.', new Date(), 'draft'),
    new BlogDTO(11, 'Web Development Best Practices', 'Best practices for web development to ensure high performance and security.', new Date(), 'published'),
    new BlogDTO(12, 'The Impact of 5G Technology', 'How 5G technology is transforming industries and changing the way we connect.', new Date(), 'draft'),
    new BlogDTO(13, 'Artificial Intelligence in Healthcare', 'How AI is being used to improve healthcare and patient outcomes.', new Date(), 'published'),
    new BlogDTO(14, 'Introduction to Internet of Things (IoT)', 'An overview of IoT and its applications in various sectors.', new Date(), 'draft'),
    new BlogDTO(15, 'Top Cybersecurity Threats in 2024', 'Stay informed about the top cybersecurity threats to watch out for in 2024.', new Date(), 'published'),
    new BlogDTO(16, 'Guide to Remote Work Tools', 'A guide to the best tools for remote work to enhance productivity and collaboration.', new Date(), 'draft'),
    new BlogDTO(17, 'Ethical Considerations in AI', 'An exploration of the ethical considerations and challenges in AI development.', new Date(), 'published')
];
  @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog){
    this.dataSource = new MatTableDataSource()
    this.sort = new MatSort()
  }

  ngOnInit(){
    this.dataSource.data = this.blogDTOArray //fill table
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

  ChangeBlogStatus(blogId:number,status:boolean){
    let msg = status ?'Are You Want To Approved For This Blog':'Are You Want To Reject This Blog';
    let info = new ConfirmDialogData('Are You Sure ?',msg)
    this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data:info
    });
  }
}
