import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './base-component/app.component';
import { MainComponent } from './pages/main/main.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { ResetpasswordComponent } from './pages/resetpassword/resetpassword.component';
import { CreateblogComponent } from './pages/createblog/createblog.component';
import { ManageBlogAdminComponent } from './pages/manage-blog-admin/manage-blog-admin.component';
import { ManageBlogClientComponent } from './pages/manage-blog-client/manage-blog-client.component';
import { ErrorComponent } from './pages/error/error.component';
import { NavComponent } from './sharedcomponent/nav/nav.component';
import { FooterComponent } from './sharedcomponent/footer/footer.component';
import { ConfirmDialogComponent } from './sharedcomponent/confirm-dialog/confirm-dialog.component';
import { AlertComponent } from './sharedcomponent/alert/alert.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule, NgForm } from '@angular/forms';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { MainNewComponent } from './pages/main-new/main-new.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BlogDetailsComponent,
    SignupComponent,
    SigninComponent,
    ResetpasswordComponent,
    CreateblogComponent,
    ManageBlogAdminComponent,
    ManageBlogClientComponent,
    ErrorComponent,
    NavComponent,
    FooterComponent,
    ConfirmDialogComponent,
    AlertComponent,
    BlogsComponent,
    MainNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CarouselModule.forRoot(),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
