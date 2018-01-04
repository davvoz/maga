import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabellaMisureComponent } from './tabella-misure.component';

describe('TabellaMisureComponent', () => {
  let component: TabellaMisureComponent;
  let fixture: ComponentFixture<TabellaMisureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabellaMisureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabellaMisureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
