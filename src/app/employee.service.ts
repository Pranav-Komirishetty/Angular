import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployeedata(){
    return [
      {"ID":1, "Name":'person one', "Age":24},
      {"ID":2, "Name":'person two', "Age":32},
      {"ID":3, "Name":'person Three', "Age":27}
    ] ;
  }
  empCount(){
    return 3;
  }
}
