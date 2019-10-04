import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes.component';

const routes: Routes = [
  {
    path: '', component: RecipesComponent, children: [
      { path: 'submit', loadChildren: './submit/submit.module#SubmitModule' },
      { path: 'show', loadChildren: './show/show.module#ShowModule' },
      { path: 'search', loadChildren: './search/search.module#SearchModule' }
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
