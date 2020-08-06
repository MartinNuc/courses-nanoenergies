import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZupaCounterComponent } from './zupa-counter.component';

describe('ZupaCounterComponent', () => {
  let component: ZupaCounterComponent;
  let fixture: ComponentFixture<ZupaCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZupaCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZupaCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
