import { Directive, ElementRef, OnInit, Input } from '@angular/core';
import { DropService } from './../app/services/drop/drop.service';

@Directive({
  selector: '[dropZone]'
})
export class DroppableDirective implements OnInit {
  constructor(public element: ElementRef, private dropService: DropService) {
    dropService.addDropZone(element);
  }

  ngOnInit() {}

}
