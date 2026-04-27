varying vec2 vUv;

uniform float uTime;
varying float noise;

void main() {
    // Solid red color, with noise added to brightness
    float red = 1.0 + noise;
    red = clamp(red, 0.0, 1.0);
    gl_FragColor = vec4(red, 0.0, 0.0, 1.0);
}