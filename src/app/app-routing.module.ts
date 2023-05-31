import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';
import {SampleComponent} from './sample/sample.component'

const routes: Routes = [
  {
    component:EmployeeListComponent,
    path:'employee-list'
  },
  {
    component:EmployeeInfoComponent,
    path:'employee-info'
  },
  {
    component:SampleComponent,
    path:'api'
  },
  {
    component:HomeComponent,
    path:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
