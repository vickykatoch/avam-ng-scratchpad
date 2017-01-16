import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ModelFormModule } from './components/model-form/model-form.module';

// import {MovieModule} from './components/movie/movie.module';
import {MovieBuilderComponent} from './components/movie/builder/movie-builder.component';
import {MovieTicketComponent} from './components/movie/ticket/movie-ticket.component';
import { MovieFormModelBuilder } from './components/movie/services/movie-form-model-builder.service';

@NgModule({
  declarations: [
    AppComponent,
    MovieBuilderComponent,
    MovieTicketComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    ModelFormModule,
    // MovieModule,
    RouterModule.forRoot([
      { path: 'moviebuilder', component: MovieBuilderComponent },
      { path: 'movieticket', component: MovieTicketComponent },
      { path: '', redirectTo: 'moviebuilder', pathMatch: 'full' },
      { path: '**', redirectTo: 'moviebuilder', pathMatch: 'full' }
    ])
  ],
  providers: [MovieFormModelBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
