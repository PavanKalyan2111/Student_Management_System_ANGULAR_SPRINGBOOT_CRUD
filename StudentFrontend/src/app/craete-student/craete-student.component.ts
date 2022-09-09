import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-craete-student',
  templateUrl: './craete-student.component.html',
  styleUrls: ['./craete-student.component.css']
})
export class CraeteStudentComponent implements OnInit {

  student: Student = new Student();
  constructor(private studentService:StudentService, private router:Router) { }

  ngOnInit(): void {}

    saveStudent(){
      this.studentService.addStudent(this.student).subscribe(data =>{
        console.log(data);
        this.goToStudentList();
      },
      error => console.error(error));
    }

  goToStudentList(){
    this.router.navigate(['/studentslist']);
  }
  onSubmit(){
    console.log(this.student);
    this.saveStudent();
  }

}
