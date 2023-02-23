import {CurriculumComponent} from './curriculum.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthenticationGuard} from '../authentication/authentication.guard';

const routes: Routes = [
  {path: '', component: CurriculumComponent},
  {
    path: 'management',
    loadChildren: () => import('./curriculum-management/curriculum-management.module')
      .then(m => m.CurriculumManagementModule),
    canLoad: [AuthenticationGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurriculumRoutingModule {}
