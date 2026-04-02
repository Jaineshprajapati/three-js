// Basic Three.js fragment shader: plain color output

uniform vec3 color;

void main() {
    gl_FragColor = vec4(color, 1.0);
}