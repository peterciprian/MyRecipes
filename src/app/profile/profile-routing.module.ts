import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'data', loadChildren: './data/data.module#DataModule' },
  { path: 'favs', loadChildren: './favs/favs.module#FavsModule' },
  { path: 'filters', loadChildren: './filters/filters.module#FiltersModule' },
  { path: 'badges', loadChildren: './badges/badges.module#BadgesModule' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
