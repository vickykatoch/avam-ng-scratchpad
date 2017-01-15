import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ModelFormModule } from './components/model-form/model-form.module';

import {MovieModule} from './components/movie/movie.module';
import {MovieBuilderComponent} from './components/movie/builder/movie-builder.component';
import {MovieTicketComponent} from './components/movie/ticket/movie-ticket.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModelFormModule,
    MovieModule,
    RouterModule.forRoot([
      { path: 'moviebuilder', component: MovieBuilderComponent },
      { path: 'movieticket', component: MovieTicketComponent },
      { path: '', redirectTo: 'moviebuilder', pathMatch: 'full' },
      { path: '**', redirectTo: 'moviebuilder', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
