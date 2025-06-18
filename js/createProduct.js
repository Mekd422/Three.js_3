import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.158.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.158.0/examples/jsm/controls/OrbitControls.js';


export function createProduct() {
  const group = new THREE.Group();

  const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0x0088ff, metalness: 0.5, roughness: 0.3 });

  const seat = new THREE.Mesh(new THREE.BoxGeometry(2, 0.3, 2), bodyMaterial);
  seat.position.y = 1;
  group.add(seat);

  for (let i = -1; i <= 1; i += 2) {
    for (let j = -1; j <= 1; j += 2) {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 1.5), bodyMaterial);
      leg.position.set(i * 0.8, 0.25, j * 0.8);
      group.add(leg);
    }
  }

  return group;
}
