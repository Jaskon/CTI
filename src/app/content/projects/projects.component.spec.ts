import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichesComponent } from './affiches.component';

describe('AffichesComponent', () => {
  let component: AffichesComponent;
  let fixture: ComponentFixture<AffichesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
