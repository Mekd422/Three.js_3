import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.158.0/build/three.module.js';


let angle = 0;

export function animateCamera(camera, target, elapsedTime) {
  angle = elapsedTime * 0.1;
  camera.position.x = 5 * Math.cos(angle);
  camera.position.z = 5 * Math.sin(angle);
  camera.lookAt(target);
}
