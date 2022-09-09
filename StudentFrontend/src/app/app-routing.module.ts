import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CraeteStudentComponent } from './craete-student/craete-student.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

const routes: Routes = [
  {path:'studentslist', component:StudentlistComponent},
  {path:'', redirectTo:'studentslist', pathMatch:'full'},
  {path:'addstudent',component:CraeteStudentComponent},
  {path:'updatestudent/:id', component:UpdateStudentComponent},
  {path:'student-details/:id', component:StudentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
