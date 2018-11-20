import { Directive, ElementRef, Input, HostListener } from "@angular/core";

@Directive({
  selector: "[appTextbox]"
})
export class TextboxDirective {
  @Input()
  inputText: string;

  constructor(private elementRef: ElementRef) {}

  ngOnChanges() {}

  @HostListener("mouseover")
  onMouseOver() {}
}
