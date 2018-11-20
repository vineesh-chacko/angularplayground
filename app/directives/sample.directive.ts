import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSample]'
})
export class SampleDirective {

  @Input() image1:string;
  @Input() image2:string;

  constructor(private currentElement:ElementRef) { 
    
    
  }

  ngOnChanges()
  {
    this.currentElement.nativeElement.setAttribute("src",this.image1);
  }
  @HostListener("mouseover")
  onMouseOver()
  {
    this.currentElement.nativeElement.setAttribute("src",this.image1);
  }
  @HostListener("mouseout")
  onMouseOut()
  {
    this.currentElement.nativeElement.setAttribute("src",this.image2);
  }



}
