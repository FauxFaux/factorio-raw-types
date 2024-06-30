import { RKnownType } from '../../scripts/raw-data';

export type JColour = [number, number, number];

export type CraftId = string;

export interface JCraftable {
  id: CraftId;
  type: RKnownType;
  human: string;
  description?: string;
  order?: string;
  subGroup?: string;
  stackSize?: number;
  // baseColor?: JColour;
}

export type JIng = [
  CraftId,
  // amount
  number,
  {
    // both
    catalystAmount?: number;

    // just fluids
    temp?: number;
    minTemp?: number;
    maxTemp?: number;
    fluidboxIndex?: number;
  }?,
];

export type JProduct = [
  CraftId,
  (
    | number
    | {
        amount?: number;
        amountMin?: number;
        amountMax?: number;
        probability?: number;
        catalystAmount?: number;

        // fluids
        temp?: number;
        fluidboxIndex?: number;
      }
  ),
];

export interface JRecipe {
  id: string;
  human: string;
  description?: string;
  category?: string;
  order?: string;
  subgroup?: string;

  ing: JIng[];
  results: JProduct[];
}
