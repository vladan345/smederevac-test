import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

let base;

// Model loading
const gltfLoader = new GLTFLoader();
gltfLoader.load("/smederevac/smederevac.gltf", (gltf) => {
  base = gltf.scene.children[2];

  camera.lookAt(base);

  let blenderScene = gltf.scene;

  blenderScene.scale.x = 0.5;
  blenderScene.scale.y = 0.5;
  blenderScene.scale.z = 0.5;

  scene.add(blenderScene);
});

const canvas = document.querySelector("#threejs");

const scene = new THREE.Scene();
scene.background = null;
/**
 * Test cube
 */
// const cube = new THREE.Mesh(
//   new THREE.BoxGeometry(1, 1, 1),
//   new THREE.MeshStandardMaterial({ color: "#00ffaa" })
// );
// scene.add(cube);

/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight("#fff", 0.5);

const pointLight = new THREE.PointLight("#fff", 10);
const pointLightHelper = new THREE.PointLightHelper(pointLight);

pointLight.position.z = 2;
pointLight.position.x = -2;

scene.add(pointLight, ambientLight);

// Camera and renderer
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight + 1,
};

const camera = new THREE.PerspectiveCamera(
  45,
  sizes.width / sizes.height,
  1,
  1000
);
camera.position.x = 4;
camera.position.y = 3;
camera.position.z = 4;
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alhpa: true,
});
renderer.setClearColor(0x000000, 0);
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const clock = new THREE.Clock();

const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
  const elapsedTime = clock.getElapsedTime();

  // base ? (base.rotation.y = elapsedTime * 0.5) : null;

  controls.update();

  renderer.render(scene, camera);

  window.requestAnimationFrame(animate);
}
animate();

window.addEventListener("resize", () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight + 1;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
