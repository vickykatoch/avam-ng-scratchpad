import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MovieBuilderComponent }   from './builder/movie-builder.component';
import { MovieTicketComponent } from './ticket/movie-ticket.component';

@NgModule({
      imports: [ReactiveFormsModule],
      exports: [MovieBuilderComponent, MovieTicketComponent],
      declarations: [MovieBuilderComponent, MovieTicketComponent],
      providers: [],
})
export class MovieModule { }
