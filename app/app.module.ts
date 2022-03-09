import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { RadioGroupTableModule } from './radio-group-table/radio-group-table.module';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [CoreModule, RadioGroupTableModule],
})
export class AppModule {}
