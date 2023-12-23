import * as THREE from 'three';
import { setupCamera } from './threejs_modules/camera.js';
import { setupRenderer } from './threejs_modules/renderer.js';
import { setupControls } from './threejs_modules/controls.js';
import { addLight } from './threejs_modules/light.js';
import { addCube, addPlane } from './threejs_modules/objects.js';
import { animate } from './threejs_modules/animation.js';

export function init() 
{
    const scene = new THREE.Scene();

    const camera = setupCamera();
    const renderer = setupRenderer();
    
    addLight(scene);

    const cube = addCube(scene);
    addPlane(scene);

    const controls = setupControls(camera, renderer, cube);

    animate(controls, renderer, scene, camera);
}