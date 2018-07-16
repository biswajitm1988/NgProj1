/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ComputeInterest2Component } from './compute-interest2.component';

describe('ComputeInterest2Component', () => {
  let component: ComputeInterest2Component;
  let fixture: ComponentFixture<ComputeInterest2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputeInterest2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputeInterest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
