import { Directive, AfterViewInit, ElementRef, Input } from '@angular/core';
import { SackService } from './../app/services/sack/sack.service';

@Directive({
  selector: '[randomizedLocation]'
})
export class RandomizedLocationDirective implements AfterViewInit {

  _sackName: string;
  _isOverlapping: boolean = false;

  constructor(private el: ElementRef, private sackService: SackService) {}

  ngAfterViewInit() {
    const parentHeight = this.el.nativeElement.parentElement.offsetHeight;
    const parentWidth = this.el.nativeElement.parentElement.offsetWidth;
    const width = this.el.nativeElement.offsetWidth;
    const height = this.el.nativeElement.offsetHeight;

    this.el.nativeElement.style.left = `${getRandomArbitrary(0, parentWidth - width)}px`;
    this.el.nativeElement.style.top = `${getRandomArbitrary(0, parentHeight - height)}px`;
  }

  @Input('randomSack')
  set randomSack(sackName: string) {
    this._sackName = sackName;
  }

}

function getRandomArbitrary(min, max): number {
  return Math.random() * (max - min) + min;
}
