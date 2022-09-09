package com.spring.student.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.student.exception.ResourceNotFound;
import com.spring.student.model.Student;
import com.spring.student.repository.StudentRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class StudentController {
	
	@Autowired
	public StudentRepository studentRepository;
	
	@GetMapping("/students")
	public List<Student> getStudent() {
		return studentRepository.findAll();
	}
	
	@PostMapping("/students")
	public Student addStudents(@RequestBody Student student) {
		return studentRepository.save(student);
	}
	
	@GetMapping("/students/{id}")
	public ResponseEntity<Student> getStudentById(@PathVariable Long id) {
		Student student = studentRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFound("Student is unavailable with the id : "+id));
		return ResponseEntity.ok(student);
	}
	@PutMapping("/students/{id}")
	public ResponseEntity<Student> updateStudent(@PathVariable Long id, @RequestBody Student studentDetails) {
		Student student = studentRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFound("Student is unavailable with the id : "+id));
		student.setFirstname(studentDetails.getFirstname());
		student.setLastname(studentDetails.getLastname());
		student.setEmailid(studentDetails.getEmailid());
		
		Student updatedStudent = studentRepository.save(student);
		return ResponseEntity.ok(updatedStudent);	
	}
		@DeleteMapping("/students/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteStudent(@PathVariable Long id) {
			Student student = studentRepository.findById(id)
					.orElseThrow(()-> new ResourceNotFound("Student is unavailable with the id : "+id));
			studentRepository.delete(student);
			Map<String, Boolean> response = new HashMap<>();
			response.put("Deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}

}
