import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAfficheComponent } from './add-affiche.component';

describe('AddAfficheComponent', () => {
  let component: AddAfficheComponent;
  let fixture: ComponentFixture<AddAfficheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAfficheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAfficheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
