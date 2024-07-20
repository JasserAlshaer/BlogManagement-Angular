import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ErrorComponent } from './pages/error/error.component';
import { ManageBlogAdminComponent } from './pages/manage-blog-admin/manage-blog-admin.component';
import { ManageBlogClientComponent } from './pages/manage-blog-client/manage-blog-client.component';
import { CreateblogComponent } from './pages/createblog/createblog.component';
import { ResetpasswordComponent } from './pages/resetpassword/resetpassword.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';
import { BlogsComponent } from './pages/blogs/blogs.component';

const routes: Routes = [
  {
    path:'',//Main Page
    component:MainComponent
  },
  {
    path:'blogs',
    component:BlogsComponent
  },
  {
    path:'details',
    component:BlogDetailsComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'signin',
    component:SigninComponent
  },
  {
    path:'resetpassword',
    component:ResetpasswordComponent
  },
  {
    path:'create-blog',
    component:CreateblogComponent
  },
  {
    path:'manage-blog-client',
    component:ManageBlogClientComponent
  },
  {
    path:'manage-blog-admin',
    component:ManageBlogAdminComponent
  },
  {
    path:'error',
    component:ErrorComponent
  },
  {
    path:'**',
    component:ErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
