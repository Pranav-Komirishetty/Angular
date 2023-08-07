import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
import { EmployeeAPIService } from './employee-api.service';
import { EMPDATA } from '../testData/employees';

describe('EmployeeAPIService', () => {
  let service: EmployeeAPIService;
  let httpTestingController : HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers : [EmployeeAPIService]
    });
    service = TestBed.inject(EmployeeAPIService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('checking for correct url',()=>{
    expect(service.url).toBe('https://localhost:44318/api/Employees');
  });

  it('should get all employees', ()=>{
    service.employeeData().subscribe((data : any)=>{
      expect(data).toBeTruthy();
      expect(data.length).toBe(4);
      const employee = data.find((data : any)=> data.id === 1);
      expect(employee.employeeName).toBe('Pranav')
    });
    const testReq = httpTestingController.expectOne('https://localhost:44318/api/Employees');
    expect(testReq.request.method).toEqual('GET');
    testReq.flush(Object.values(EMPDATA));
  });

  it('should send data to the API', () => {
    const testData = { employeeName: 'Test Data', email: 'Test Data', age: '21', salary: 10000 };
    service.sendData(testData).subscribe((response) => {
      expect(response).toBeTruthy();
    });
    const testReq = httpTestingController.expectOne('https://localhost:44318/api/Employees');
    expect(testReq.request.method).toEqual('POST');
    expect(testReq.request.body).toEqual(testData);
    testReq.flush({});
  });

  afterEach(()=>{
    httpTestingController.verify();
  });

});
