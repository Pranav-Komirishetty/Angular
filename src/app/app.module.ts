import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { EmployeeService } from './employee.service';
import { SampleComponent } from './sample/sample.component';
import { HomeComponent } from './home/home.component';
import { ManipulateEleDirective } from './manipulate-ele.directive';
import {ReactiveFormsModule} from '@angular/forms'
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {HttpClientModule} from '@angular/common/http';
import { UrlErrorComponent } from './url-error/url-error.component';
import { AddressComponent } from './address/address.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component'
import { CoindeskService } from './api/coindesk.service';
import { AutoHyphenDirective } from './custom-directive/auto-hyphen.directive';
//import { NgxMask } from 'ngx-mask'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeInfoComponent,
    SampleComponent,
    HomeComponent,
    ManipulateEleDirective,
    UrlErrorComponent,
    AddressComponent,
    PersonalInfoComponent,
    AutoHyphenDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
   //NgxMaskModule.forRoot();
  ],
  //providers: [EmployeeService,CoindeskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
