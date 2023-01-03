// open the link and save as three.js, then include it in your index.html file  --->  https://threejs.org/build/three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerHeight / window.innerWidth,
  0.1,
  1000
);

camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

//

const geomatry = new THREE.BoxGeometry(2, 2, 1);

const material = new THREE.MeshBasicMaterial({ color: "blue" });

const cube = new THREE.Mesh(geomatry, material);

scene.add(cube);

renderer.render(scene, camera);

console.log("object");
