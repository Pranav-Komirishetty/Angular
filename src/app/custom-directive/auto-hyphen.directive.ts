import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAutoHyphen]'
})
export class AutoHyphenDirective {
  count=0;
  constructor(private el: ElementRef) { }
  
  @HostListener('input', ['$event'])
  
  onInput(event : any){
    
      const value = event.target.value.replace(/-/g, '').replace(/\D/g, '');
      const formattedValue = value.replace(/(\d{4})/g, '$1-');
      this.count=formattedValue.length;
      if(this.count<11){
        event.target.value = formattedValue;
    }
  }
}
