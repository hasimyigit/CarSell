/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CarMainComponent } from './car-main.component';

describe('CarMainComponent', () => {
  let component: CarMainComponent;
  let fixture: ComponentFixture<CarMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
