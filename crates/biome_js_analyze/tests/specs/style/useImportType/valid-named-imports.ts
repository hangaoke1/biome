// Empty import
import {} from "";

// No references
import { A } from "";

// With Import attributes
import { B } from "" with { type: "json" };
type BB = B;

import type { C } from "";
export type { C };

import { D } from "";
let a: D = new D();

import { type E, F } from "";
export type { E };
export { F };

import type { G } from "";
export type { G };
