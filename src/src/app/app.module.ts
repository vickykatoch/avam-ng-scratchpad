import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ModelFormModule } from './components/model-form/model-form.module';
import {StrategyModule} from './components/strategy/strategy.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModelFormModule,
    StrategyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
