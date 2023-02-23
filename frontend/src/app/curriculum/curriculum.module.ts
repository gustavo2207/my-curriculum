import {ProjectsComponent} from './projects/projects.component';
import {ProfessionalInfoComponent} from './professional-info/professional-info.component';
import {StacksComponent} from './stacks/stacks.component';
import {FooterComponent} from './../components/footer/footer.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CurriculumRoutingModule} from './curriculum-routing.module';
import {CurriculumComponent} from './curriculum.component';
import {HeaderComponent} from '../components/header/header.component';
import {ModalComponent} from "../components/modal/modal.component";
import {FormsModule} from '@angular/forms';
import {ProfileComponent} from './profile/profile.component';

import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
  declarations: [
    CurriculumComponent,
    FooterComponent,
    HeaderComponent,
    ModalComponent,
    StacksComponent,
    ProfileComponent,
    ProfessionalInfoComponent,
    ProjectsComponent,
  ],
  imports: [
    CommonModule,
    CurriculumRoutingModule,
    FormsModule,
    ProgressSpinnerModule
  ],
  exports: [CurriculumComponent],
})
export class CurriculumModule {}
