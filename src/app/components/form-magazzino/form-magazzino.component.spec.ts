import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMagazzinoComponent } from './form-magazzino.component';

describe('FormMagazzinoComponent', () => {
  let component: FormMagazzinoComponent;
  let fixture: ComponentFixture<FormMagazzinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMagazzinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMagazzinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
