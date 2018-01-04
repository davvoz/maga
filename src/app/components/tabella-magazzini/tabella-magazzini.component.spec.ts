import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabellaMagazziniComponent } from './tabella-magazzini.component';

describe('TabellaMagazziniComponent', () => {
  let component: TabellaMagazziniComponent;
  let fixture: ComponentFixture<TabellaMagazziniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabellaMagazziniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabellaMagazziniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
