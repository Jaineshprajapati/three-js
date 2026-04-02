varying vec2 vUv;

uniform float uTime;

void main() {
    // Blend a vibrant blue and a warm orange
    vec4 colorA = vec4(0.1, 0.6, 1.0, 1.0);    // blue
    vec4 colorB = vec4(1.0, 0.6, 0.1, 1.0);    // orange
    vec4 colorC = vec4(1.0, 0.0, 0.0, 1.0);    // red   
    vec4 colorD = vec4(0.0, 1.0, 0.0, 1.0);    // green

    vec4 color1 = mix(colorA, colorB, vUv.x + sin(uTime * .2));
    vec4 color2 = mix(colorC, colorD, vUv.x + sin(uTime * .2));

    vec4 final = mix(color1, color2, vUv.y + cos(uTime * .2));
    gl_FragColor = final;
}