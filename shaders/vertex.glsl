uniform float uTime;

void main() {
    vec3 pos = position;
    pos.x+=.2*sin(pos.x*3.*pos.y*2. + uTime);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}