import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfessionalXpComponent } from './edit-professional-xp.component';

describe('EditProfessionalXpComponent', () => {
  let component: EditProfessionalXpComponent;
  let fixture: ComponentFixture<EditProfessionalXpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfessionalXpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProfessionalXpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
