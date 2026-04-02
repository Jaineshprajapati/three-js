uniform float uTime;

// Vertex shader passing model, view, and projection positions

varying vec3 vModelPosition;
varying vec3 vViewPosition;
varying vec4 vProjPosition;

void main() {
    vModelPosition = position;                           // Local (model) position
    vec4 viewPos = modelViewMatrix * vec4(position, 1.0);
    viewPos.z += cos(viewPos.y*1. * viewPos.x*3. + uTime)*.2;
    vViewPosition = viewPos.xyz;                         // View space position
    vProjPosition = projectionMatrix * viewPos;          // Projected position (clip space)
    gl_Position = vProjPosition;
}