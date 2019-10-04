import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SubmitRoutingModule } from './submit-routing.module';
import { SubmitComponent } from './submit.component';


@NgModule({
  declarations: [SubmitComponent],
  imports: [
    CommonModule,
    SubmitRoutingModule,
    FormsModule,
    NgbModule
  ]
})
export class SubmitModule { }
