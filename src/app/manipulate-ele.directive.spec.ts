import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ManipulateEleDirective } from './manipulate-ele.directive';
import { DebugElement } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { By } from '@angular/platform-browser';

describe('ManipulateEleDirective', () => {

    let component : HomeComponent;
    let fixture : ComponentFixture<HomeComponent>;
    let el : DebugElement;

    beforeEach(waitForAsync (()=>{
        TestBed.configureTestingModule({
            declarations:[HomeComponent,ManipulateEleDirective]
        })
        fixture=TestBed.createComponent(HomeComponent);
        component=fixture.componentInstance;
        el=fixture.debugElement;
        fixture.detectChanges();
    }))
    let mockEleRef = {
        nativeElement: document.createElement('div')
    }
  it('should create an instance', () => {
    const directive = new ManipulateEleDirective(mockEleRef);
    expect(directive).toBeTruthy();
  });
  it('text color should be red',()=>{
    let data = el.query(By.css('h2'));
    expect(data.nativeElement.style.color).toBe('red');
  })
});


