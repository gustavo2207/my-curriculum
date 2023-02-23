import { Component, Input, OnInit } from '@angular/core';
import { Experiance } from './experiance';
import { ExperianceService } from './experiance.service';

@Component({
  selector: 'app-professional-info',
  templateUrl: './professional-info.component.html',
  styleUrls: ['./professional-info.component.css'],
})
export class ProfessionalInfoComponent implements OnInit {
  experiances!: Experiance[];

  @Input()
  aboutMe!: string;

  constructor(protected experianceService: ExperianceService) {}

  ngOnInit(): void {
    this.get();
    console.log(this.experiances);
  }

  get() {
    this.experianceService.getExperiance().subscribe({
      next: (_experiance: Experiance[]) => (this.experiances = _experiance),
      error: (error) => console.log(error),
    });
  }
}
