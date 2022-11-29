import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  studentList:any=[]
  constructor(public studentService:StudentService, private router:Router) { }

  ngOnInit(): void {
    this.loadStudent();
  }

  loadStudent(){
    return this.studentService.GetStudent().subscribe((data:{})=>{
      this.studentList=data;
      console.log(data);
    });
  }

  deleteStudent(id:number){
    this.studentService.deleteStudent(id).subscribe((response)=>{
      this.loadStudent();
    });
  }

  onEdit(client:Student){
    console.log(client);
    this.studentService.selectStudent=Object.assign({},client);
    this.router.navigate(["/add-student"]);
  }

}