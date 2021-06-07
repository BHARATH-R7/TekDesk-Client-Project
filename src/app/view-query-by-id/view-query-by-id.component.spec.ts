import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQueryByIdComponent } from './view-query-by-id.component';

describe('ViewQueryByIdComponent', () => {
  let component: ViewQueryByIdComponent;
  let fixture: ComponentFixture<ViewQueryByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewQueryByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewQueryByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
