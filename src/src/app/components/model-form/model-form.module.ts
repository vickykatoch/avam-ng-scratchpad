import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { ModelFormComponent }   from './model-form.component';

@NgModule({
      imports: [ReactiveFormsModule],
      exports: [ModelFormComponent],
      declarations: [ModelFormComponent],
      providers: [],
})
export class ModelFormModule { }
