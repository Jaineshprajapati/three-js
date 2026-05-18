import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import vertex from "./shaders/vertex.glsl?raw";
import fragment from "./shaders/fragment.glsl?raw";

// Create scene
const scene = new THREE.Scene();

// Create camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

// Create renderer
const canvas = document.querySelector("#canvas");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Add Orbit Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Add a cube
const geometry = new THREE.PlaneGeometry(2, 2, 200, 200);
const material = new THREE.ShaderMaterial({
  side: THREE.DoubleSide,
  vertexShader: vertex,
  fragmentShader: fragment,
  uniforms: {
    uTime: { value: 0 },
    uTexture: { value: new THREE.TextureLoader().load("./images.jpeg")}
  },
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Position camera
camera.position.z = 3;

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  material.uniforms.uTime.value += 0.05;
  controls.update();
  renderer.render(scene, camera);
}
animate();

// Resize renderer with window
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
