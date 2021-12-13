import { Vec, color } from './types.ts';

const vec3 = (e1: number, e2: number, e3: number): Vec => {

    const add = ( v: Vec): Vec => {
        const { e } = v;
        return vec3(e1 + e[0],  e2 + e[1], e3 + e[2]);
    }

    const mult = ( t: number ) => {
        return vec3(e1 * t, e2 * t, e3 * t);
    }

    const div = (t: number) => {
        return vec3(e1,e2,e3).mult(1/t);
    }

    const lengthSquared = () => {
        return e1*e1+ e2*e2+ e3*e3;
    }

    const length = () => {
        return Math.sqrt(lengthSquared());
    }


    const x = () => e1;
    const y = () => e2;
    const z = () => e3;

    return {
        mult: mult,
        add: add,
        div: div,
        lengthSquared: lengthSquared,
        length: length,
        e: [e1, e2, e3],
        x: x,
        y: y,
        z: z,
    }
}

export default vec3;

export const out = ( vector: Vec): string => {
    return vector.e.join(' ');
}

export const add = (u: Vec, v: Vec): Vec => {
    return vec3(u.e[0] + v.e[0], u.e[1] + v.e[1], u.e[2] + v.e[2]);
}

export const substract = (u: Vec, v: Vec): Vec => {
    return vec3(u.e[0] - v.e[0], u.e[1] - v.e[1], u.e[2] - v.e[2]);
}

export const multiply = (u: Vec, v: Vec): Vec => {
    return vec3(u.e[0] * v.e[0], u.e[1] * v.e[1], u.e[2] * v.e[2]);
}

export const scalarMultiply = (t: number, v: Vec): Vec => {
    return vec3(t*v.e[0], t*v.e[1], t*v.e[2]);
}

export const divide = (v: Vec, t: number): Vec => {
    return scalarMultiply(1/t,v);
}

export const dot = (u: Vec, v: Vec): number => {
    return u.e[0] * v.e[0] + u.e[1] * v.e[1] + u.e[2] * v.e[2];
}
export const cross = (u: Vec, v: Vec): Vec => {
    return vec3(u.e[1] * v.e[2] - u.e[2] * v.e[1],
               u.e[2] * v.e[0] - u.e[0] * v.e[2],
               u.e[0] * v.e[1] - u.e[1] * v.e[0]);
}

export const unitVector = (v: Vec): Vec => {
    return divide(v, v.length());
}

export const writeColor = (pixelColor: color): string => {
    return Math.floor( 255.999 * pixelColor.x( )) + " " + Math.floor( 255.999 * pixelColor.y( )) + " " + Math.floor( 255.999 * pixelColor.z( )) + "\n";
}
