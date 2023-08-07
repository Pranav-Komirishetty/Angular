import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListComponent } from './employee-list.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [RouterTestingModule],
      declarations: [EmployeeListComponent]
    });
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have correct employee count',()=>{
    expect(component.employeedata.length).toBe(3);
  })
});
