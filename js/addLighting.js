import * as THREE from 'three';

// Add lighting setup with ambient and directional lights
export function addLighting(scene) {

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4); 
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); 
  directionalLight.position.set(5, 10, 5); 
  directionalLight.castShadow = true;


  directionalLight.shadow.mapSize.width = 1024;
  directionalLight.shadow.mapSize.height = 1024;
  directionalLight.shadow.camera.near = 0.5;
  directionalLight.shadow.camera.far = 50;

  scene.add(directionalLight);

  
}
