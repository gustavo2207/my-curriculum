import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Project } from './project';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  projectSubscription!: Subscription;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectSubscription = this.projectService
      .getProjectInformation()
      .subscribe({
        next: (projects) => {
          this.projects = projects;
        },
      });
  }
}
