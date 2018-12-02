import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventrecieveComponent } from './eventrecieve.component';

describe('EventrecieveComponent', () => {
  let component: EventrecieveComponent;
  let fixture: ComponentFixture<EventrecieveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventrecieveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventrecieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
