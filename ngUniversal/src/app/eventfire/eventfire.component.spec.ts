import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventfireComponent } from './eventfire.component';

describe('EventfireComponent', () => {
  let component: EventfireComponent;
  let fixture: ComponentFixture<EventfireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventfireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventfireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
