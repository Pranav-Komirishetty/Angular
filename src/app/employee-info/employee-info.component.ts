import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {

  public employeedata=[] as any;

  constructor(private _employeeservice : EmployeeService){

  }
  ngOnInit(){
    this.employeedata = this._employeeservice.getEmployeedata();
  }
}
