import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUpdateProdottoComponent } from './form-update-prodotto.component';

describe('FormUpdateProdottoComponent', () => {
  let component: FormUpdateProdottoComponent;
  let fixture: ComponentFixture<FormUpdateProdottoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUpdateProdottoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUpdateProdottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
