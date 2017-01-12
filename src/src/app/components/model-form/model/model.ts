export interface IMovieStrategy {
      alias : string;
      description: string;
      legs: IMovieLeg[];
      factor: IFactor;
}

export interface IFactor {
      spreadWeightingMode: string;
      qtyWeightingMode: string;
}

export interface IMovieLeg {
      source : string;
      tenure: string;
      qtyFactor : number;
      priceFactor: number;
}