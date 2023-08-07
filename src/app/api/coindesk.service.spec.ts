import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { CoindeskService } from './coindesk.service';

describe('CoindeskService', () => {
  let service: CoindeskService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CoindeskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('checking for correct url',()=>{
    expect(service.url).toBe('https://api.coindesk.com/v1/bpi/currentprice.json');
  });
});
