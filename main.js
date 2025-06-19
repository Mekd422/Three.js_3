import * as THREE from 'three';
import { initScene } from './js/initScene.js';
import { createProduct } from './js/createProduct.js';
import { addLighting } from './js/addLighting.js';
import { enableInteraction } from './js/interaction.js';
import { setupControlOverride, animateLoop } from './js/cameraAnimation.js';

const { scene, camera, renderer, controls } = initScene();

const product = createProduct();
scene.add(product);

addLighting(scene);

enableInteraction(renderer, camera, scene);

setupControlOverride(controls);

animateLoop(renderer, scene, camera, controls, product);


// At the start of main.js
console.log('Script loaded');

// After creating renderer
console.log('Renderer created');

// After adding product to scene
console.log('Product added to scene:', scene.children.length);