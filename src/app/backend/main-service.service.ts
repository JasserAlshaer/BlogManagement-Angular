import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDTO } from '../dtos/backend-dtos/LoginDTO';
import { SignupDTO } from '../dtos/backend-dtos/SignupDTO';
import { CreateBlogDTO } from '../dtos/backend-dtos/CreateBlogDTO';
import { EditBlogDTO } from '../dtos/backend-dtos/EditBlogDTO';
import { BlogCardDTO } from '../dtos/backend-dtos/BlogCardDTO';
import { SubscribtionDTO } from '../dtos/backend-dtos/SubscribtionDTO';
import { DetailsDTO } from '../dtos/backend-dtos/DetailDTO';
import { Router } from '@angular/router';
import { BlogUserDTO } from '../dtos/backend-dtos/BlogUserDTO';

@Injectable({
  providedIn: 'root',
})
export class MainServiceService {
  //Service Will Containts of Many Fucation To Call Many Endpoint
  private baseURL: string = 'https://localhost:44363';

  constructor(private http:HttpClient,private router:Router){}

  GetAllSubscription():Observable<SubscribtionDTO[]>{
    return this.http.get<SubscribtionDTO[]>(`${this.baseURL}/api/Users/GetSubscribtions`)
  }

  GetAllBlogsMain() :Observable<BlogCardDTO[]>{
    return this.http.get<BlogCardDTO[]>(`${this.baseURL}/api/Users/GetUserBlogs`)
  }

  GetAllBlogs():Observable<BlogCardDTO[]> {
    return this.http.get<BlogCardDTO[]>(`${this.baseURL}/api/Users/GetUserBlogs`)
  }

  GetUserBlogByUserId(id:number):Observable<BlogUserDTO[]> {
    return this.http.get<BlogUserDTO[]>(`${this.baseURL}/api/Users/GetUserBlogByUserId?Id=${id}`)
  }

  BlogDetails(id:number):Observable<DetailsDTO> {
    return this.http.get<DetailsDTO>(`${this.baseURL}/api/Users/GetBlogDetails/${id}`)
  }

  Login(input:LoginDTO): Observable<any> {
    const headers = new HttpHeaders({
      'Accept': 'text/plain'
    });
    return this.http.post(`${this.baseURL}/api/Users/Login`,input, { headers, responseType: 'text' })
  }

  Register(input:SignupDTO): Observable<any> {
    const headers = new HttpHeaders({
      'Accept': 'text/plain'
    });
    return this.http.post(`${this.baseURL}/api/Users/CreateNewAccount`,input, { headers, responseType: 'text' })
  }

  CreateBlog(input:CreateBlogDTO): Observable<any> {
    const headers = new HttpHeaders({
      'Accept': 'text/plain'
    });
    return this.http.post(`${this.baseURL}/api/Users/CreateBlog`,input, { headers, responseType: 'text' })
  }

  EditBlog(input:EditBlogDTO) : Observable<any>{
    const headers = new HttpHeaders({
      'Accept': 'text/plain'
    });
    return this.http.put(`${this.baseURL}/api/Users/UpdateBlog`,input, { headers, responseType: 'text' })
  }

  DeleteBlog(blogId:number): Observable<any> {
    const headers = new HttpHeaders({
      'Accept': 'text/plain'
    });
    return this.http.put(`${this.baseURL}/api/Users/UpdateBlogAactivation?Id=${blogId}&value=false`,null, { headers, responseType: 'text' })
  }

  Logout(){
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    this.router.navigate([''])
   //return this.http
  }



  ChangeBlogStatus(blogId:number,status:boolean): Observable<any> {
    return this.http.put(`${this.baseURL}/api/Users/UpdateBlogApprovement?Id=${blogId}&value=${status}`,null)
  }

  uploadImage(file: File) : Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    const headers = new HttpHeaders({
      'Accept': 'text/plain'
    });
    return this.http.post(`${this.baseURL}/api/Files/UploadImageAndGetURL`, formData, { headers, responseType: 'text' })
  }
}
