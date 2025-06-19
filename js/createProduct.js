import * as THREE from 'three';

// Implement basic 3D chair model creation

export function createProduct() {
  const group = new THREE.Group(); 
  
  // Chair Seat
  const seatGeometry = new THREE.BoxGeometry(2, 0.3, 2);
  const material = new THREE.MeshStandardMaterial({ color: 0x8B4513, roughness: 0.5, metalness: 0.2 });
  const seat = new THREE.Mesh(seatGeometry, material);
  seat.position.set(0, 1, 0); // raise above origin
  group.add(seat);

  // Chair Backrest
  const backrestGeometry = new THREE.BoxGeometry(2, 2, 0.3);
  const backrest = new THREE.Mesh(backrestGeometry, material);
  backrest.position.set(0, 2, -0.85);
  group.add(backrest);

  // Chair Legs (4)
  const legGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1, 16);
  const legMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 });
  
  const positions = [
    [-0.9, 0.5, -0.9],
    [0.9, 0.5, -0.9],
    [-0.9, 0.5, 0.9],
    [0.9, 0.5, 0.9]
  ];

  positions.forEach(pos => {
    const leg = new THREE.Mesh(legGeometry, legMaterial);
    leg.position.set(...pos);
    group.add(leg);
  });

  // Ensure everything is centered
  group.position.set(0, 0, 0);

  return group;
}
