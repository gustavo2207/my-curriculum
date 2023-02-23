import { EditAboutMeComponent } from './profile/edit-about-me/edit-about-me.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';

import {CurriculumManagementRoutingModule} from './curriculum-management-routing.module';
import {CurriculumManagementComponent} from './curriculum-management.component';

import {MenubarModule} from 'primeng/menubar';
import {TabMenuModule} from 'primeng/tabmenu';
import {PanelModule} from 'primeng/panel';
import {SidebarModule} from 'primeng/sidebar';
import { EditPersonalInfosComponent } from './profile/edit-personal-infos/edit-personal-infos.component';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EditProfessionalXpComponent } from './profile/edit-professional-xp/edit-professional-xp.component';
import { AddStackComponent } from './stacks/add-stack/add-stack.component';
@NgModule({
  declarations: [
    CurriculumManagementComponent,
    EditPersonalInfosComponent,
    EditAboutMeComponent,
    EditProfessionalXpComponent,
    AddStackComponent
  ],
  imports: [
    CommonModule,
    CurriculumManagementRoutingModule,
    FileUploadModule,
    HttpClientModule,
    MenubarModule,
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextareaModule,
    TabMenuModule,
    PanelModule,
    SidebarModule
  ]
})
export class CurriculumManagementModule {}
