import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMisuraComponent } from './form-misura.component';

describe('FormMisuraComponent', () => {
  let component: FormMisuraComponent;
  let fixture: ComponentFixture<FormMisuraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMisuraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMisuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
