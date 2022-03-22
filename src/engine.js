import Evolution from "./evolution.js";
import { loadPattern } from "./helper.js"

// (world: boolean[][]) => boolean[][]
export const next = (world) => {
  let evolution = new Evolution();
  evolution.initialise(world);
  return evolution.evolve();
};

// (pattern: string) => boolean[][]
export const parse = (pattern) => {
  return loadPattern(pattern);
};
