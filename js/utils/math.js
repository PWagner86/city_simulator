export function lerp(A, B, t) {
    return A + (B - A) * t;
}

export function vLerp(A, B, t) {
    return {
        x: lerp(A.x, B.x, t),
        y: lerp(A.y, B.y, t)
    };
}