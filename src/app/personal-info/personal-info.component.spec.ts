import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInfoComponent } from './personal-info.component';

describe('PersonalInfoComponent', () => {
  let component: PersonalInfoComponent;
  let fixture: ComponentFixture<PersonalInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalInfoComponent]
    });
    fixture = TestBed.createComponent(PersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("testing html element", () =>{
    const data = fixture.nativeElement;
    expect(data.querySelector("p").textContent).toBe("personal information of employee");
  }) 
});
