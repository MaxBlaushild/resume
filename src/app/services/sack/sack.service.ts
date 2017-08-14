import { Injectable, ElementRef } from '@angular/core';

@Injectable()
export class SackService {

  sacks: any = {};

  constructor() { }

  addSack(sackName: string) {
    this.sacks[sackName] = this.sacks[sackName] ? this.sacks[sackName] : [];
  }

  addToSack(sackName: string, element: ElementRef) {
    this.sacks[sackName].push(element);
  }

  getElementsInSack(sackName: string): ElementRef[] {
    return this.sacks[sackName];
  }

}
