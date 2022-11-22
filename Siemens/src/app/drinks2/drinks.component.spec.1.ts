/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DrinkComponent1 } from './drinks.component.1';

describe('DrinksComponent', () => {
  let component: DrinkComponent1;
  let fixture: ComponentFixture<DrinkComponent1>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkComponent1 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkComponent1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
