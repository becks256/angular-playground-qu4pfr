import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';

import { RadioGroupTableComponent } from './radio-group-table.component';

@NgModule({
  declarations: [RadioGroupTableComponent],
  exports: [RadioGroupTableComponent],
  imports: [SharedModule],
})
export class RadioGroupTableModule {}
