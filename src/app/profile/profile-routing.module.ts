import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'data', loadChildren: () => import('./data/data.module').then(m => m.DataModule) },
  { path: 'favs', loadChildren: () => import('./favs/favs.module').then(m => m.FavsModule) },
  { path: 'filters', loadChildren: () => import('./filters/filters.module').then(m => m.FiltersModule) },
  { path: 'badges', loadChildren: () => import('./badges/badges.module').then(m => m.BadgesModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
