import * as THREE from "three";
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

// Add a cube
const geometry = new THREE.BoxGeometry(1, 1, 1, 30, 30, 30);
const material = new THREE.ShaderMaterial({
uniforms: {
    uTime: {value: 0},
},
vertexShader: vertex,
fragmentShader: fragment,
});
console.log(material);
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Position camera
camera.position.z = 5;

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Rotate the cube for some animation
//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;

  material.uniforms.uTime.value += 0.1;
  renderer.render(scene, camera);
}
animate();

// Resize renderer with window
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
