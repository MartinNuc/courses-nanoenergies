import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoredButtonsComponent } from './colored-buttons.component';

describe('ColoredButtonsComponent', () => {
  let component: ColoredButtonsComponent;
  let fixture: ComponentFixture<ColoredButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColoredButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColoredButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
