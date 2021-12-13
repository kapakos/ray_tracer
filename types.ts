export interface Vec {
    add: (vec: Vec) => Vec;
    mult: (t: number) => Vec;
    div: (t: number) => Vec;
    lengthSquared: () => number;
    length: () => number;
    x: () => number;
    y: () => number;
    z: () => number;
    e: Array<number>;
}

export interface Ray {
    origin: () => point3;
    direction: () => Vec;
    at: (t: number) => point3;
}

export type point3 = Vec;
export type color = Vec;
