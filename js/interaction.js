import * as THREE from 'three';

// Create reusable raycaster and mouse vector
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

let INTERSECTED = null;

export function enableInteraction(renderer, camera, scene) {
  const canvas = renderer.domElement;

  // Tooltip / Label Panel
  const label = document.createElement('div');
  label.style.position = 'absolute';
  label.style.background = '#fff';
  label.style.padding = '4px 8px';
  label.style.border = '1px solid #ccc';
  label.style.fontSize = '12px';
  label.style.display = 'none';
  document.body.appendChild(label);

  // Handle Mouse Move (for hover effect)
  canvas.addEventListener('mousemove', (event) => {
    updateMousePosition(event, canvas);

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
      const object = intersects[0].object;

      if (INTERSECTED !== object) {
        if (INTERSECTED) {
          INTERSECTED.scale.set(1, 1, 1); // Reset previous hover
        }
        INTERSECTED = object;
        INTERSECTED.scale.set(1.1, 1.1, 1.1); // Enlarge slightly on hover
      }

      label.innerText = object.name || 'Unknown Part';
      label.style.left = `${event.clientX + 10}px`;
      label.style.top = `${event.clientY + 10}px`;
      label.style.display = 'block';
    } else {
      if (INTERSECTED) {
        INTERSECTED.scale.set(1, 1, 1);
      }
      INTERSECTED = null;
      label.style.display = 'none';
    }
  });

  // Handle Mouse Click
  canvas.addEventListener('click', (event) => {
    updateMousePosition(event, canvas);

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
      const clicked = intersects[0].object;

      // Store original color if not already stored
      if (!clicked.userData.originalColor) {
        clicked.userData.originalColor = clicked.material.color.clone();
      }

      // Animate scale & color change briefly
      clicked.scale.set(1.2, 1.2, 1.2);
      clicked.material.color.set(0xff0000);

      setTimeout(() => {
        clicked.scale.set(1, 1, 1);
        clicked.material.color.copy(clicked.userData.originalColor);
      }, 500);
    }
  });
}

// Normalize mouse coordinates (-1 to 1 range)
function updateMousePosition(event, canvas) {
  const rect = canvas.getBoundingClientRect();
  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
}
