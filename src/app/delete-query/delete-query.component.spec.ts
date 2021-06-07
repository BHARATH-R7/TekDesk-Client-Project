import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteQueryComponent } from './delete-query.component';

describe('DeleteQueryComponent', () => {
  let component: DeleteQueryComponent;
  let fixture: ComponentFixture<DeleteQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
