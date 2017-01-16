import { Injectable } from '@angular/core';
import {IMovieDefinition, IFactor, ITicketLeg} from '../model/model';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Injectable()
export class MovieFormModelBuilder {
    
    // ********************FORM MODEL BUILDING [STARTS HERE] *******************
    createNewMovieDefinitionFormModel(formBuilder : FormBuilder) : FormGroup {
        let movieDefFG = formBuilder.group({
            alias : ['', [
                            Validators.required,
                            Validators.maxLength(16)]
                         ],
            description: ['', [
                            Validators.required,
                            Validators.maxLength(30)]
            ],
            displayQty: ['', [Validators.required]],
            dripSize : [0, [Validators.required]],
            maxLegAmount: [0, [Validators.required]],
            factor : formBuilder.group({
                spreadWeighingMode: ['', [Validators.required]],
                priceFormat : ['', [Validators.required]],
                tickSize : [undefined, [Validators.required]],
                qtyWeighingMOde: ['', [Validators.required]],
            })
        });
        return movieDefFG;
    }
    getValidationMessages() :  { [key: string]: { [key: string]: string } } {
        return {
            alias : {
                required : 'Alias is required field',
                maxLength : 'Alias can have 16 chars at max'
            },
            description : {
                required : 'Description is required field',
                maxLength : 'Description can have 30 chars at max, (No special characters)'
            },
            displayQty : {
                required : 'Display Quantity is required field'
            },
            dripSize : {
                required : 'DripSize is required field'
            },
            maxLegAmount : {
                required : 'Max Leg Amount is required field'
            },
            spreadWeighingMode : {
                    required : 'Spread Weighting Mode is required'
            },
            priceFormat : {
                required : 'Price Format is required'
            }
        };
    }
    // ********************FORM MODEL BUILDING [ENDS HERE] *******************



    // **********************HELPER METHODS (STARTS HERE)*************************
    createNewMovieDefinition() : IMovieDefinition  {
        return <IMovieDefinition> {
            alias: '',
            description: '',
            displayQty: 'NOTIONAL',
            dripSize: 1,
            maxLegAmount: 1,
            factor : <IFactor>{
                spreadWeighingMode : 'YIELD',
                priceFormat: 'decimal',
                tickSize: .01,
                qtyWeighingMOde: 'DV01'
            },
            // legs : []
        };
    }
    // **********************HELPER METHODS (ENDS HERE)*************************

}
