import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Student } from './student';
@Injectable({
  providedIn: 'root'
})

export class StudentService {

  private baseURL ="http://localhost:8082/api/students";
  constructor(private httpClient:HttpClient) { }

  getStudentsList() : Observable<Student[]>{
    return this.httpClient.get<Student[]>("http://localhost:8082/api/students");
  }

  addStudent(student: Student): Observable<object>{
    return this.httpClient.post("http://localhost:8082/api/students", student);
  }

  getStudentById(id: number): Observable<Student>{
      return this.httpClient.get<Student>(`${this.baseURL}/${id}`);
  }
  updateStudent(id: number, student: Student): Observable<object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, student);
  }
  deleteStudent(id: number): Observable<object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
