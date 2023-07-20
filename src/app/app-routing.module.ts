import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';
import {SampleComponent} from './sample/sample.component';
import {UrlErrorComponent} from './url-error/url-error.component';
import{AddressComponent} from './address/address.component';
import{PersonalInfoComponent} from './personal-info/personal-info.component';

const routes: Routes = [
  { path:'', redirectTo : 'home', pathMatch : 'full'},
  { component : HomeComponent,
    path : 'home' },
  { component:EmployeeListComponent,
    path:'employee-list',children:[{
      path : '', redirectTo:'address', pathMatch:'full' },
    { component : AddressComponent,
      path : 'address' },
    { component : PersonalInfoComponent,
      path : 'personal-info'}
    ]},
  { component:EmployeeInfoComponent,
    path:'employee-info'},
  { component:SampleComponent,
    path:'api' },
  { component : UrlErrorComponent,
    path:'**'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
