import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import vertex from './shaders/vertex.glsl';
import fragment from './shaders/fragment.glsl';
// Basic Three.js scene with OrbitControls and responsive resize

// Assuming three.js and OrbitControls are available via ES modules or have been included via <script> tags

// Scene, camera, renderer
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75, 
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 0, 5);

// Create or get an existing <canvas> element
let canvas = document.createElement('canvas');
canvas.id = 'threejs-canvas';
document.body.appendChild(canvas);

const renderer = new THREE.WebGLRenderer({ 
  canvas: canvas 
});
renderer.setSize(window.innerWidth, window.innerHeight);

// Orbit Controls
const controls = new OrbitControls(camera, renderer.domElement);

// Add a simple geometry (cube) with wireframe
const geometry = new THREE.PlaneGeometry(2, 3, 10 ,10);
const material = new THREE.ShaderMaterial({
  vertexShader: vertex,
  fragmentShader: fragment,
  side: THREE.DoubleSide,
  uniforms: {
    color: { value: new THREE.Color(0xff0000) },
    uTime: { value: 0 },
  },
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);


// Responsive resizing
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  
  material.uniforms.uTime.value += 0.1;
  renderer.render(scene, camera);
  controls.update();
}
animate();