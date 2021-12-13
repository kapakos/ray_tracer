import { assertEquals } from "https://deno.land/std@0.117.0/testing/asserts.ts";
import vec3, { out, add, substract, multiply, scalarMultiply, divide, dot, cross, unitVector } from '../vec3.ts';

Deno.test("vec3 addition" , () => {
    const add1 = vec3(1,1,1);
    const add2 = vec3(2,2,2);
    const result = add1.add(add2);
    assertEquals(result.e, [3,3,3]);
});

Deno.test("vec3 multiplication", ()  => {
    const vec = vec3(2,3,4);
    const t = 5;
    const result = vec.mult(t);
    assertEquals(result.e, [10, 15, 20]);
});

Deno.test("vec3 Division", () => {
    const vec = vec3(2,2,2);
    const t = 2;
    const result = vec.div(t);
    assertEquals(result.e, [1,1,1]);
});

Deno.test("vec3 length squared", () => {
    const vec = vec3(2,3,4);
    const result = vec.lengthSquared();
    assertEquals(result, 29);
});

Deno.test("vec3 Length", () => {
    const vec = vec3(-1, -2, -2);
    const result = vec.length();
    assertEquals(result, 3);
});

Deno.test("vec3 x,y,z functions", () => {
    const vec = vec3(2,3,4);
    const x = vec.x();
    const y = vec.y();
    const z = vec.z();

    assertEquals(x,2);
    assertEquals(y,3);
    assertEquals(z, 4);
});

Deno.test("Utility out", () => {
    const result = out(vec3(1,2,3));
    assertEquals(result, "1 2 3");
});

Deno.test("Utility addition", () => {
    const vec = vec3(2,3,4);
    const vec2 = vec3(3,4,5);
    const result = add(vec, vec2);
    assertEquals(result.e, [5, 7,9]);
});

Deno.test("Utility substraction", () => {
    const vec1 = vec3(5,6,7);
    const vec2 = vec3(1,2,3);
    const result = substract(vec1, vec2);
    assertEquals(result.e, [4,4,4]);
})

Deno.test("Utility multiplication", () => {
    const vec1 = vec3(5,6,7);
    const vec2 = vec3(1,2,3);
    const result = multiply(vec1, vec2);
    assertEquals(result.e, [5,12,21]);
})

Deno.test("Utility scalar multiplication", () => {
    const vec = vec3(1,2,3);
    const t = 4;
    const result = scalarMultiply(t, vec);
    assertEquals(result.e, [4,8,12] );
})

Deno.test("Utility division", () => {
    const vec = vec3(4,4,4);
    const t = 2;
    const result = divide(vec, t);
    assertEquals(result.e, [2,2,2]);
})

Deno.test("Utility dot product", () => {
    const vec1 = vec3(1,2,3);
    const vec2 = vec3(2,3,4);
    const result = dot(vec1, vec2);
    assertEquals(result, 20);
})

Deno.test("Utility cross", () => {
    const vec1 = vec3(1,2,3);
    const vec2 = vec3(2,3,4);
    const result = cross(vec1, vec2);
    assertEquals(result.e,[-1,2,-1]);
})

Deno.test("Utility unit vector", () => {
    const vec = vec3(7,7,7);
    const result = unitVector(vec);
    assertEquals(result.e,[0.5773502691896257, 0.5773502691896257, 0.5773502691896257]);
})
