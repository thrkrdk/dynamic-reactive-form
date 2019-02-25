import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationDisplayComponent } from './validation-display.component';

describe('ValidationDisplayComponent', () => {
  let component: ValidationDisplayComponent;
  let fixture: ComponentFixture<ValidationDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
