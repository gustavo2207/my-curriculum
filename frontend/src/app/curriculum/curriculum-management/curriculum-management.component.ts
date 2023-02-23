import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-curriculum-management',
  templateUrl: './curriculum-management.component.html',
  styleUrls: ['./curriculum-management.component.css'],
})
export class CurriculumManagementComponent {
  items: MenuItem[] = [];

  constructor(private routes: Router) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Profile',
        icon: 'pi pi-user-edit',
        items: [
          {
            label: 'Personal Infos',
            icon: 'pi pi-user',
            command: () =>
              this.routes.navigate([
                'curriculum',
                'management',
                'personal-info',
              ]),
          },
          {
            label: 'about-me',
            icon: 'pi pi-id-card',
            command: () =>
              this.routes.navigate(['curriculum', 'management', 'about-me']),
          },
          {
            label: 'Professional Xp',
            icon: 'pi pi-users',
            command: () =>
              this.routes.navigate([
                'curriculum',
                'management',
                'professional-xp',
              ]),
          },
        ],
      },
      {
        label: 'Stacks',
        icon: 'pi pi-code',
        items: [
          {
            label: 'Add',
            icon: 'pi pi-plus',
            command: () =>
              this.routes.navigate(['curriculum', 'management', 'add-stack']),
          },
          {
            label: 'Edit',
            icon: 'pi pi-pencil',
            command: () =>
              this.routes.navigate(['curriculum', 'management', 'edit-stacks']),
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-trash',
            command: () =>
              this.routes.navigate([
                'curriculum',
                'management',
                'remove-stack',
              ]),
          },
        ],
      },
      {
        label: 'Projects',
        icon: 'pi pi-briefcase',
        items: [
          {
            label: 'Add',
            icon: 'pi pi-plus',
            command: () =>
              this.routes.navigate(['curriculum', 'management', 'add-project']),
          },
          {
            label: 'Edit',
            icon: 'pi pi-pencil',
            command: () =>
              this.routes.navigate([
                'curriculum',
                'management',
                'edit-projects',
              ]),
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-trash',
            command: () =>
              this.routes.navigate([
                'curriculum',
                'management',
                'remove-project',
              ]),
          },
        ],
      },
    ];
  }
}
