
export class Validation {
      static getValidationMessages() :  { [key: string]: { [key: string]: string } } {
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
            },
            tickSize : {
                required : 'TickSize is required'
            },
            qtyWeighingMode : {
                required : 'Quantity Weighting Mode is required'
            }
        };
    }
}