import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialModalComponent } from './tutorial-modal.component';

describe('TutorialModalComponent', () => {
  let component: TutorialModalComponent;
  let fixture: ComponentFixture<TutorialModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
