varying vec2 vUv;

uniform float uTime;

void main() {
    
    // float green = smoothstep(0.2, 0.8, vUv.y) * 0.39;
    // vec4 color = vec4(0.0, green, 0.0, 1.0);

   float val = clamp(-1., 1., (vUv.y*2.)-1.);
   vec4 color = vec4(val, val, val, 1.0);

    gl_FragColor = color;
}