import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { StartegyBuilderComponent }   from './builder/strategy-builder.component';
import { StrategyTicketComponent } from './ticket/strategy-ticket.component';

@NgModule({
      imports: [ReactiveFormsModule],
      exports: [StartegyBuilderComponent, StrategyTicketComponent],
      declarations: [StartegyBuilderComponent, StrategyTicketComponent],
      providers: [],
})
export class StrategyModule { }
