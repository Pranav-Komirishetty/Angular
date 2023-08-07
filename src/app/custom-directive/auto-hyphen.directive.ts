import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAutoHyphen]'
})
export class AutoHyphenDirective {
  count=0;
  constructor(private el: ElementRef<any>) { }
  
  @HostListener('input', ['$event'])
  
 
  onInput(event : any){
    const value = event.target.value.replace(/-/g, '').replace(/\D/g, '');
    const formattedValue = value.replace(/(\d{4})/g, '$1-').replace(/(\d{4}-\d{4}-\d{4})-$/, "$1");
    event.target.value = formattedValue;
    return formattedValue;
  }
}
