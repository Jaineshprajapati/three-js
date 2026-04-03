varying vec2 vUv;

uniform float uTime;

void main() {
    vUv = uv; // pass UVs to fragment shader

    vec3 displacedPosition = position;
    displacedPosition.z += sin(displacedPosition.x * 1. + uTime) * 0.4;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(displacedPosition, 1.0);
}