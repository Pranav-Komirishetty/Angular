import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeInfoComponent } from './employee-info.component';
import { EmployeeDataComponent } from '../employee-data/employee-data.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EmployeeInfoComponent', () => {
  let component: EmployeeInfoComponent;
  let fixture: ComponentFixture<EmployeeInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeInfoComponent,EmployeeDataComponent],
      imports:[HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(EmployeeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
