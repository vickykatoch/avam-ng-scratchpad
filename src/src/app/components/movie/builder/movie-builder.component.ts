import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControlName } from '@angular/forms';
import { MovieFormModelBuilder } from '../services/movie-form-model-builder.service';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import { ValidationProcessor } from '../utils/validation-processor';


@Component({
      selector: 'x-movie-builder',
      templateUrl: './movie-builder.component.html',
      styleUrls: ['./movie-builder.component.scss']
})
export class MovieBuilderComponent implements OnInit , AfterViewInit {

      @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
      movieDefinition : FormGroup;
      private subscription: Subscription;
      // Use with the generic validation message class
      violations: { [key: string]: string } = {};
      private validationProcessor: ValidationProcessor;


      constructor(private fb: FormBuilder,
                  private formModelBuilder: MovieFormModelBuilder) { 
                        this.validationProcessor 
                              = new ValidationProcessor(formModelBuilder.getValidationMessages());
      }

     
      ngOnInit() { 
            debugger;
            this.movieDefinition  = this.formModelBuilder.createNewMovieDefinitionFormModel(this.fb);
            this.movieDefinition.setValue(this.formModelBuilder.createNewMovieDefinition());
      }
      ngAfterViewInit(): void {
            // Watch for the blur event from any input element on the form.
            let controlBlurs: Observable<any>[] = this.formInputElements
                  .map((formControl: ElementRef) => Observable.fromEvent(formControl.nativeElement, 'blur'));
            // Merge the blur event observable with the valueChanges observable
            Observable.merge(this.movieDefinition.valueChanges, ...controlBlurs)
                        .debounceTime(500)
                        .subscribe(evt => this.onValidationProcessed(evt));
      }
      onValidationProcessed(evt: any) : void { 
            this.violations = this.validationProcessor.processMessages(this.movieDefinition);
            // debugger;
      }
      onSave() : void {
            console.log(this.movieDefinition.value);
      }
      onReset() : void {
            this.movieDefinition.reset();
            this.movieDefinition.setValue(this.formModelBuilder.createNewMovieDefinition());
      }
}