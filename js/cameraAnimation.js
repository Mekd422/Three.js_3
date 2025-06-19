import * as THREE from 'three';

// Set up OrbitControls for camera navigation

let angle = 0;
let autoRotateEnabled = true;

export function setupControlOverride(controls) {
  if (!controls) return;

  let timeout;
  controls.addEventListener('start', () => {
    autoRotateEnabled = false;
    clearTimeout(timeout);
  });

  controls.addEventListener('end', () => {
    timeout = setTimeout(() => {
      autoRotateEnabled = true;
    }, 5000);
  });
}

// Main animation loop
export function animateLoop(renderer, scene, camera, controls, productGroup) {
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const delta = clock.getDelta();

    if (autoRotateEnabled) {
      angle += delta * 0.3; // speed
      const radius = 7;
      const x = radius * Math.sin(angle);
      const z = radius * Math.cos(angle);
      camera.position.set(x, camera.position.y, z);
      camera.lookAt(0, 0, 0);
    }

    if (controls) controls.update();

   
    if (productGroup) {
      const time = clock.elapsedTime;
      productGroup.rotation.y += 0.002; 
      productGroup.position.y = Math.sin(time * 1.5) * 0.1; 
    }

    renderer.render(scene, camera);
  }

  animate();
}
