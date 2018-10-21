import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballerComponent } from './footballer.component';

describe('FootballerComponent', () => {
  let component: FootballerComponent;
  let fixture: ComponentFixture<FootballerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootballerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
