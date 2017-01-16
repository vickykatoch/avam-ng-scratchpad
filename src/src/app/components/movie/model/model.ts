export interface IMovieDefinition {
    alias: string;
    description: string;
    displayQty: string;
    dripSize : number;
    maxLegAmount; number;
    factor: IFactor;
    legs: ITicketLeg[];
}
export interface IFactor {
    spreadWeighingMode : string;
    priceFormat: string;
    tickSize: number;
    qtyWeighingMOde: string;
}

export interface ITicketLeg {
    source: string;
    instrument: string;
    refLeg : boolean;
    priceFactor: number;
    qtyFactor: number;
}