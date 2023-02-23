import { RemoveProjectComponent } from './projects/remove-project/remove-project.component';
import { EditProjectsComponent } from './projects/edit-projects/edit-projects.component';
import { AddProjectComponent } from './projects/add-project/add-project.component';
import { RemoveStackComponent } from './stacks/remove-stack/remove-stack.component';
import { AddStackComponent } from './stacks/add-stack/add-stack.component';
import { EditProfessionalXpComponent } from './profile/edit-professional-xp/edit-professional-xp.component';
import { EditAboutMeComponent } from './profile/edit-about-me/edit-about-me.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculumManagementComponent } from './curriculum-management.component';
import {EditPersonalInfosComponent} from './profile/edit-personal-infos/edit-personal-infos.component';
import { EditStacksComponent } from './stacks/edit-stacks/edit-stacks.component';

const routes: Routes = [
  { path: '', component: CurriculumManagementComponent, children: [
    {path: 'personal-info', component: EditPersonalInfosComponent, pathMatch: "full"},
    {path: 'about-me', component: EditAboutMeComponent, pathMatch: "full"},
    {path: 'professional-xp', component: EditProfessionalXpComponent, pathMatch: "full"},
    {path: 'edit-stacks', component: EditStacksComponent, pathMatch: 'full'},
    {path: 'add-stack', component: AddStackComponent, pathMatch: 'full'},
    {path: 'remove-stack', component: RemoveStackComponent, pathMatch: 'full'},
    {path: 'add-project', component: AddProjectComponent, pathMatch: 'full'},
    {path: 'edit-projects', component: EditProjectsComponent, pathMatch: 'full'},
    {path: 'remove-project', component: RemoveProjectComponent, pathMatch: 'full'},
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurriculumManagementRoutingModule { }
