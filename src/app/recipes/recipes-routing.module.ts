import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes.component';

const routes: Routes = [
  {
    path: '', component: RecipesComponent, children: [
      { path: 'submit', loadChildren: () => import('./submit/submit.module').then(m => m.SubmitModule) },
      { path: 'show', loadChildren: () => import('./show/show.module').then(m => m.ShowModule) },
      { path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule) }
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
