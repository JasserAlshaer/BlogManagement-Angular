import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BlogDTO } from 'src/app/dtos/blogs/blogDto';

@Component({
  selector: 'app-createblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.css']
})
export class EditblogComponent {
  constructor(public dialogRef: MatDialogRef<EditblogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BlogDTO
  ) {}
}
