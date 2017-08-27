import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeploobmenComponent } from './teploobmen.component';

describe('TeploobmenComponent', () => {
  let component: TeploobmenComponent;
  let fixture: ComponentFixture<TeploobmenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeploobmenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeploobmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
