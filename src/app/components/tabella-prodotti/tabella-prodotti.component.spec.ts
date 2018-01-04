import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabellaProdottiComponent } from './tabella-prodotti.component';

describe('TabellaProdottiComponent', () => {
  let component: TabellaProdottiComponent;
  let fixture: ComponentFixture<TabellaProdottiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabellaProdottiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabellaProdottiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
