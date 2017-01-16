export interface IMovieDefinition {
    alias: string;
    description: string;
    displayQty: string;
    dripSize : number;
    maxLegAmount; number;
    factor: IFactor;
    currentLeg : ITicketLeg;
    legs: ITicketLeg[];
}
export interface IFactor {
    spreadWeighingMode : string;
    priceFormat: string;
    tickSize: number;
    qtyWeighingMode: string;
}

export interface ITicketLeg {
    id: string;
    source: string;
    instrument: string;
    refLeg : boolean;
    priceFactor: number;
    qtyFactor: number;
}