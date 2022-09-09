import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})

export class StudentlistComponent implements OnInit {

  students!: Student[];
  
  constructor(private studentService: StudentService, private router: Router ) { }

  ngOnInit(): void {
    this.getStudent();
  }
  private getStudent() {
     this.studentService.getStudentsList().subscribe(data =>{
      this.students = data;
    });
  }
   updatestudentlist(id: number){
      console.log(id);
      this.router.navigate(['updatestudent', id]);
  }
  deleteStudent(id: number){
    this.studentService.deleteStudent(id).subscribe(data =>{
      console.log(data);
      this.getStudent();
    });
  }
  studentDetails(id: number){
    this.router.navigate(['student-details', id]);
  }

}
