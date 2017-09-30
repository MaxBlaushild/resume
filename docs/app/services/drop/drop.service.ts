import { Injectable, ElementRef } from '@angular/core';

@Injectable()
export class DropService {

  dropZones: ElementRef[] = [];
  dropCandidate: ElementRef;
  dropCandidateScreenX: number;
  dropCandidateScreenY: number;

  constructor() { }

  addDropZone(el: ElementRef) {
    this.dropZones.push(el);
  }

  possiblyDrop(ele: ElementRef) {
    this.dropCandidate = ele;
    this.dropZones.forEach(this.tryDropping.bind(this));
  }

  tryDropping(zone: ElementRef) {
    const candidateBounds = this.dropCandidate.nativeElement.getBoundingClientRect();
    const bounds = zone.nativeElement.getBoundingClientRect();
    const centerX = (bounds.right - bounds.right) / 2;
    var isInZone = true;
    isInZone = isInZone && bounds.top <= candidateBounds.top;
    isInZone = isInZone && bounds.bottom >= candidateBounds.top;
    isInZone = isInZone && 0 <= candidateBounds.left;
    isInZone = isInZone && bounds.right >= candidateBounds.left;

    if (isInZone) {
      this.dropCandidate.nativeElement.parentElement.removeChild(this.dropCandidate.nativeElement);
      this.dropCandidate.nativeElement.style.cssText = '';
      this.dropCandidate.nativeElement.style.position = 'fixed';
      this.dropCandidate.nativeElement.style.top = `${candidateBounds.top}px`;
      this.dropCandidate.nativeElement.style.left = `${candidateBounds.left}px`;
      zone.nativeElement.appendChild(this.dropCandidate.nativeElement);
    }
  }
}
