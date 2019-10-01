import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeasonalRoutingModule } from './seasonal-routing.module';
import { SeasonalComponent } from './seasonal.component';


@NgModule({
  declarations: [SeasonalComponent],
  imports: [
    CommonModule,
    SeasonalRoutingModule
  ]
})
export class SeasonalModule { }
