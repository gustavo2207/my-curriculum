import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Experiance, ExperianceDTO } from '../../../professional-info/experiance';
import { Component, OnInit } from '@angular/core';
import {ExperianceService} from '../../../professional-info/experiance.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-edit-professional-xp',
  templateUrl: './edit-professional-xp.component.html',
  styleUrls: ['./edit-professional-xp.component.css']
})
export class EditProfessionalXpComponent implements OnInit {

  experiances: Experiance[] = []
  experiancesForm!: FormGroup

  items: MenuItem[] = [];
  listExperiance: boolean = true;
  addExperiance: boolean = false;
  removeExperiance: boolean = false;
  display: boolean = false;
  experianceForm!: FormGroup
  onGoingExperianceId!: string;

  constructor(private experianceService: ExperianceService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.experianceForm = this.formBuilder.group({
      title: ["", [Validators.required, Validators.nullValidator]],
      description: ["", [Validators.required, Validators.nullValidator]]
    })
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home', command: () => this.listExperianceSetup()},
      {label: 'Add', icon: 'pi pi-fw pi-plus', command: () => this.addExperianceSetup()},
      {label: 'Remove', icon: 'pi pi-fw pi-minus', command: () => this.removeExperianceSetup()}
    ];
    this.listExperianceSetup();
  }

  removeExperianceSetup(): void {
    this.getExperiance();
    this.removeExperiance = true
    this.listExperiance = false;
    this.addExperiance = false;
  }

  deleteExperiance(experianceId: string) {
    this.experianceService.deleteExperiance(experianceId).subscribe({
      complete: () => this.removeExperianceSetup()
    })
  }

  listExperianceSetup(): void {
    this.getExperiance();
    this.listExperiance = true;
    this.addExperiance = false;
    this.removeExperiance = false;
  }

  addExperianceSetup(): void {
    this.addExperiance = true;
    this.listExperiance = false;
    this.removeExperiance = false;
  }

  async getExperiance() {
    this.experianceService.getExperiance().subscribe({
      next: (experiances) => {
        this.experiances = experiances
      },
      complete: () => console.log(this.experiances)
    })
  }

  updateExperiance() {
    const formValues = this.experianceForm.getRawValue() as Experiance;

    this.experianceService.putExperiance(this.onGoingExperianceId, formValues).subscribe({
      complete: async () => {
        await this.getExperiance();
        this.display = false
      }
    })
  }

  showSideBar(experianceId: string) {
    const {title, description} = this.experiances.find(((experiance) => experiance._id === experianceId)) ?? {title: "", description: ""}
    this.display = true
    this.experianceForm.setValue({
      title,
      description
    })
    this.onGoingExperianceId = experianceId;
    console.log(experianceId)
  }

  createExperiance() {
    const formValues = this.experianceForm.getRawValue() as ExperianceDTO;
    this.experianceService.createExperiance(formValues).subscribe({
      complete: () => this.listExperianceSetup()
    })
  }
}
