import { Component } from '@angular/core';
import { EmployeeAPIService } from '../services/employee-api.service';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent {
  employees : any;
  employeeData : String[] = [];
  constructor(private empData : EmployeeAPIService){
    empData.employeeData().subscribe((data)=>{
      console.warn(data);
      this.employees=data;
      console.warn(this.employees);
    })
  }
  
  getAllData(){
      this.empData.employeeData().subscribe((data)=>{
      this.employeeData=data;
      console.warn(this.employeeData);
    })
  }
  
}
