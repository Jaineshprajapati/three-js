varying vec2 vUv;

uniform float uTime;

void main() {
    vec4 c1 = vec4(0.0, 0.39, 0.0, 1.0); // dark green (bottom)
    vec4 c2 = vec4(1.0, 1.0, 1.0, 1.0);  // white (middle)
    vec4 c3 = vec4(1.0, 0.5, 0.0, 1.0);  // orange (top)

    // Use step at two thresholds: 0.3 and 0.6
    float s1 = step(0.3, vUv.y); // 0 if <0.3, 1 if >=0.3
    float s2 = step(0.6, vUv.y); // 0 if <0.6, 1 if >=0.6

    vec4 final = c1;
    final = mix(final, c2, s1);
    final = mix(final, c3, s2);

    gl_FragColor = final;
}