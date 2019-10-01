import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeasonalComponent } from './seasonal.component';

const routes: Routes = [{ path: '', component: SeasonalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeasonalRoutingModule { }
