import * as THREE from 'three';

export function addLighting(scene) {
  const ambient = new THREE.AmbientLight(0xffffff, 0.5);
  const directional = new THREE.DirectionalLight(0xffffff, 1);
  directional.position.set(5, 10, 7.5);
  scene.add(ambient, directional);
}
