import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericalWidgetComponent } from './numerical-widget.component';

describe('NumericalWidgetComponent', () => {
  let component: NumericalWidgetComponent;
  let fixture: ComponentFixture<NumericalWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumericalWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumericalWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
