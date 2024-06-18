import { Directive, ElementRef, HostListener, Input, input } from '@angular/core';

@Directive({
  selector: '[appHoverCard]',
  standalone: true
})
export class HoverCardDirective {



  @Input() hoverColor: 'black' | 'white' = 'white'



  constructor(public element: ElementRef) { }


  @HostListener('mouseover')

  onMousOver() {
    this.element.nativeElement.style.backgroundColor = this.hoverColor
  }


  @HostListener('mouseout')

  onMousOut() {
    this.element.nativeElement.style.backgroundColor = 'none'
  }

}
