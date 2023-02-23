/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditStacksComponent } from './edit-stacks.component';

describe('EditStacksComponent', () => {
  let component: EditStacksComponent;
  let fixture: ComponentFixture<EditStacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditStacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
