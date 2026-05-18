varying vec2 vUv;
varying float noise;

uniform sampler2D uTexture;

void main() {
    vec4 color = texture2D(uTexture, vUv);

    // Ensure noise is positive and normalized
    float n = clamp(noise, 0.0, 1.0);

    // Modulate color brightness with noise (add 1.0 so base color is visible)
    color.rgb *= (1.0 + n * 0.3);

    gl_FragColor = color;
}