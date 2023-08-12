import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { RoleComponent } from './role/role.component';
import { RoleListComponent } from './role-list/role-list.component';
import { CollegeComponent } from './college/college.component';
import { CollegeListComponent } from './college-list/college-list.component';
import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { MarksheetListComponent } from './marksheet-list/marksheet-list.component';
import { MeritlistComponent } from './merit-list/merit-list.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { AddFacultyComponent } from './add-faculty/add-faculty.component';
import { AddfacultyListComponent } from './addfaculty-list/addfaculty-list.component';
import { TimetableComponent } from './timetable/timetable.component';
import { TimetableListComponent } from './timetable-list/timetable-list.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { DocumentComponent } from './document/document.component';

const routes: Routes = [
  { path :'',redirectTo:'login',pathMatch:'full'},
  { path : 'menu' , component:MenuComponent},
  { path : 'login' , component:LoginComponent},
  { path : 'sessionOut' , component:LoginComponent},
  { path : 'welcome', component:WelcomeComponent},
  { path : 'forgetpassword' , component:ForgetpasswordComponent},
  { path : 'registration' , component:RegistrationComponent},
  { path : 'logout' , component:MenuComponent},
  { path : 'user' , component:UserComponent},
  { path : 'user/:id' , component:UserComponent},
  { path : 'userlist' , component:UserListComponent},
  { path : 'role', component:RoleComponent},
  { path : 'role/:id' , component:RoleComponent},
  { path : 'rolelist' , component:RoleListComponent},
  { path : 'college' , component:CollegeComponent},
  { path : 'college/:id' , component:CollegeComponent},
  { path : 'collegelist' , component:CollegeListComponent},
  { path : 'course' , component:CourseComponent},
  { path : 'course/:id' , component:CourseComponent},
  { path : 'courselist' , component:CourseListComponent},
  { path : 'marksheet' , component:MarksheetComponent},
  { path : 'marksheet/:id' , component:MarksheetComponent},
  { path : 'marksheetlist' , component:MarksheetListComponent},
  { path : 'meritlist' , component:MeritlistComponent},
  { path : 'student' , component:StudentComponent},
  { path : 'student/:id' , component:StudentComponent},
  { path : 'studentlist' , component:StudentListComponent},
  { path : 'subject' , component:SubjectComponent},
  { path : 'subject/:id' , component:SubjectComponent},
  { path : 'subjectlist' , component:SubjectListComponent},
  { path : 'addfaculty' , component:AddFacultyComponent},
  { path : 'addfaculty/:id' , component:AddFacultyComponent},
  { path : 'addfacultylist' , component:AddfacultyListComponent},
  { path : 'timetable' , component:TimetableComponent},
  { path : 'timetable/:id' , component:TimetableComponent},
  { path : 'timetablelist' , component:TimetableListComponent},
  { path : 'changepassword' , component:ChangepasswordComponent},
  { path : '**', component:DocumentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
