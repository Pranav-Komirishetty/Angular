import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeDataComponent } from './employee-data.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EmployeeAPIService } from '../services/employee-api.service';

describe('EmployeeDataComponent', () => {
  let component: EmployeeDataComponent;
  let fixture: ComponentFixture<EmployeeDataComponent>;
  let apiService : EmployeeAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeDataComponent],
      imports:[HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(EmployeeDataComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(EmployeeAPIService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('checking for correctness of url',()=>{
    expect(apiService.url).toBe('https://localhost:44318/api/Employees');
  })
});
