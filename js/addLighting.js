import * as THREE from 'three';


export function addLighting(scene) {

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4); // white light, 40% strength
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); // white, brighter
  directionalLight.position.set(5, 10, 5); // overhead at an angle
  directionalLight.castShadow = true;


  directionalLight.shadow.mapSize.width = 1024;
  directionalLight.shadow.mapSize.height = 1024;
  directionalLight.shadow.camera.near = 0.5;
  directionalLight.shadow.camera.far = 50;

  scene.add(directionalLight);

  
}
