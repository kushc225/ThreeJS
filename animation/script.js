// open the link and save as three.js, then include it in your index.html file  --->  https://threejs.org/build/three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerHeight / window.innerWidth,
  0.1,
  1000
);

camera.position.z = 8;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

//

const geomatry = new THREE.BoxGeometry(0.5, 0.5, 0.5);

const material = new THREE.MeshBasicMaterial({ color: "green" });

const cube = new THREE.Mesh(geomatry, material);

scene.add(cube);

// animation part here

let flag = true;
animate();

function animate() {
  // setting the border (till  where this cube can travel )
  if (cube.position.y > 5) {
    flag = false;
  } else if (cube.position.y < -5) flag = true;

  if (flag) cube.position.y += 0.1;
  else cube.position.y -= 0.1;

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  cube.rotation.z += 0.01;

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
