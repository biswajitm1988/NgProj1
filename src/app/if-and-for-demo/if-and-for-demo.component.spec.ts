/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IfAndForDemoComponent } from './if-and-for-demo.component';

describe('IfAndForDemoComponent', () => {
  let component: IfAndForDemoComponent;
  let fixture: ComponentFixture<IfAndForDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfAndForDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfAndForDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
