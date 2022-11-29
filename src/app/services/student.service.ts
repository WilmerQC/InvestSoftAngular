import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  selectStudent:Student=new Student();

  reqHeader=new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http:HttpClient) { }

  baseurl='http://127.0.0.1:8000/api/';

  //metodo GET
  GetStudent():Observable<Student>{
    return this.http.get<Student>(this.baseurl+'estudiante/');
  }

  //metodo POST
  createStudent(student:Student):Observable<Student>{
    return this.http.post(this.baseurl+'estudiante/',student,{headers:this.reqHeader})
  }

  //metodo DELETE
  deleteStudent(id:number){
   return this.http.delete(this.baseurl+'estudiante/'+id+'/');
  }

  //metodo UPDATE
  UpdateStudent(id:number,student:Student){
    return this.http.put(this.baseurl+'estudiante/'+id+'/',student);
  }

}
