import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStackComponent } from './add-stack.component';

describe('AddStackComponent', () => {
  let component: AddStackComponent;
  let fixture: ComponentFixture<AddStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
