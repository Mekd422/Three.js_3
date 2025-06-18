import * as THREE from 'three';

export function setupInteraction(scene, camera, renderer) {
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  function onClick(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(scene.children, true);
    if (intersects.length > 0) {
      const part = intersects[0].object;
      part.material.color.set(0xff0000);
      alert(`Clicked: ${part.name || 'Part'}`);
    }
  }

  window.addEventListener('click', onClick);
}
