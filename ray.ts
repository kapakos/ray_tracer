import { Vec, point3, Ray } from './types.ts';
import { scalarMultiply } from './vec3.ts';

const ray = (orig: point3, dir: Vec): Ray => {
    const origin = () => orig;
    const direction = () => dir;
    const at = (t: number): point3 => {
        return orig.add(scalarMultiply(t, dir));
    }

    return {
        origin: origin,
        direction: direction,
        at: at
    }
} 

export default ray;
