import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MovieBuilderComponent }   from './builder/movie-builder.component';
import { MovieTicketComponent } from './ticket/movie-ticket.component';
import { MovieFormModelBuilder } from './services/movie-form-model-builder.service';

@NgModule({
      imports: [ReactiveFormsModule, HttpModule],
      exports: [MovieBuilderComponent, MovieTicketComponent],
      declarations: [MovieBuilderComponent, MovieTicketComponent],
      providers: [MovieFormModelBuilder],
})
export class MovieModule { }
