import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DakServiceComponent } from './dak-service.component';

describe('DakServiceComponent', () => {
  let component: DakServiceComponent;
  let fixture: ComponentFixture<DakServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DakServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DakServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
