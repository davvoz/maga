import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniaturaComponent } from './miniatura.component';

describe('MiniaturaComponent', () => {
  let component: MiniaturaComponent;
  let fixture: ComponentFixture<MiniaturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniaturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
