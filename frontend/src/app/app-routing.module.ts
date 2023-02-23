import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: "curriculum", pathMatch: "full"},
  {
    path: 'curriculum',
    loadChildren: () =>
      import('./curriculum/curriculum.module').then((m) => {
        return m.CurriculumModule;
      })
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
