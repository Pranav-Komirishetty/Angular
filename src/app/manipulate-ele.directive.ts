import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appManipulateEle]'
})
export class ManipulateEleDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.color="red"
   }

}
