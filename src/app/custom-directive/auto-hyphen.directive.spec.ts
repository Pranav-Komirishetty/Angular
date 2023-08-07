import { AutoHyphenDirective } from "./auto-hyphen.directive";

describe('AutoHyphenDirective', () => {
  let mockEleRef = {
    nativeElement: document.createElement('div')
  }
  it('should create an instance', () => {
    const directive = new AutoHyphenDirective(mockEleRef);
    expect(directive).toBeTruthy();
  });

  it('should not change the format if already correct',()=>{
    const directive = new AutoHyphenDirective(mockEleRef);
    const event = {
      target:{
        value:'1234-1234-1234' ,
      },
    };
    const formattedinput = directive.onInput(event);
    expect(formattedinput).toBe('1234-1234-1234');
  });
  it('should change the format for the given input',()=>{
    const directive = new AutoHyphenDirective(mockEleRef);
    const event = {
      target:{
        value:'123412341234' ,
      },
    };
    const formattedinput = directive.onInput(event);
    expect(formattedinput).toBe('1234-1234-1234');
  });
});