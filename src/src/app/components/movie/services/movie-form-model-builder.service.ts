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
                qtyWeighingMode: ['', [Validators.required]],
            }),
            currentLeg : formBuilder.group({
                id: [''],
                source: ['', [Validators.required]],
                instrument: ['', [Validators.required]],
                refLeg : [undefined, [Validators.required]],
                priceFactor: [undefined, [Validators.required]],
                qtyFactor: [undefined, [Validators.required]],
            })
        });
        return movieDefFG;
    }
    
    createNewLeg() : ITicketLeg {
        return <ITicketLeg> {
            id:'',
            source: '',
            instrument: '',
            refLeg : false,
            priceFactor: 1,
            qtyFactor: 1
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
                qtyWeighingMode: 'DV01'
            },
            legs : []
        };
    }
    // **********************HELPER METHODS (ENDS HERE)*************************

}
