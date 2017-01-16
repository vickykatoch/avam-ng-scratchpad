import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControlName } from '@angular/forms';
import { MovieFormModelBuilder } from '../services/movie-form-model-builder.service';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import * as _ from 'lodash';

import { ValidationProcessor } from '../validations/validation-processor';
import { Validation } from '../validations/validations';
import {IMovieDefinition, IFactor, ITicketLeg} from '../model/model';
import { ControlDataCollections } from '../utils/collections';


@Component({
      selector: 'x-movie-builder',
      templateUrl: './movie-builder.component.html',
      styleUrls: ['./movie-builder.component.scss']
})
export class MovieBuilderComponent implements OnInit , AfterViewInit {

      @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
      movieDefinitionFormGroup : FormGroup;
      private movieDef : IMovieDefinition;

      private subscription: Subscription;
      // Use with the generic validation message class
      violations: { [key: string]: string } = {};
      private validationProcessor: ValidationProcessor;
      sources: any[]=[];
      instruments: any[]=[];

      constructor(private fb: FormBuilder,
                  private formModelBuilder: MovieFormModelBuilder) { 
                        this.validationProcessor 
                              = new ValidationProcessor(Validation.getValidationMessages());
                        this.sources = ControlDataCollections.theatreSources;
      }

     
      ngOnInit() { 
            this.movieDefinitionFormGroup  = this.formModelBuilder.createNewMovieDefinitionFormModel(this.fb);
            this.movieDef = this.formModelBuilder.createNewMovieDefinition();
            let fgModel = Object.assign({},this.movieDef, { currentLeg: this.formModelBuilder.createNewLeg()});
            this.movieDefinitionFormGroup.patchValue(fgModel);
      }
      ngAfterViewInit(): void {
            // Watch for the blur event from any input element on the form.
            let controlBlurs: Observable<any>[] = this.formInputElements
                  .map((formControl: ElementRef) => Observable.fromEvent(formControl.nativeElement, 'blur'));
            // Merge the blur event observable with the valueChanges observable
            Observable.merge(this.movieDefinitionFormGroup.valueChanges, ...controlBlurs)
                        .debounceTime(500)
                        .subscribe(evt => this.onValidationProcessed(evt));
      }
      onValidationProcessed(evt: any) : void { 
            this.violations = this.validationProcessor.processMessages(this.movieDefinitionFormGroup);
            // debugger is not required;
      }
      onSourceChanged(source: any) : void {
            debugger;
            let src = _.filter(this.sources, (src: any)=> src.name === source);
            this.instruments = src[0].instruments;
            console.log(source);
      }
      onAddUpdateLeg(): void {
            debugger;
            let legGroup = this.movieDefinitionFormGroup.get('currentLeg');
            
            if(legGroup.valid) {
                  let leg = <ITicketLeg>legGroup.value;
                  if(leg.id) {

                  } else {
                        leg.id = "12";
                        this.movieDef.legs.push(leg); 
                  }
                  legGroup.reset();
                  this.movieDefinitionFormGroup.patchValue({currentLeg : this.formModelBuilder.createNewLeg()});
            }
      }
      onSave() : void {
            console.log(this.movieDefinitionFormGroup.value);
      }
      onReset() : void {
            this.movieDefinitionFormGroup.reset();
            this.movieDefinitionFormGroup.setValue(this.formModelBuilder.createNewMovieDefinition());
      }
}