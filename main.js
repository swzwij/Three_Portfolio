import * as THREE from 'three';
import { setupCamera } from './threejs_modules/camera.js';
import { setupRenderer } from './threejs_modules/renderer.js';
import { setupControls } from './threejs_modules/controls.js';
import { addSceneLight } from './threejs_modules/light.js';
import { addEmpty } from './threejs_modules/objects.js';
import { animate } from './threejs_modules/animation.js';
import { setupSkybox } from './threejs_modules/skybox.js';
import { addSceneObjects } from './threejs_modules/scene.js';

export function init() 
{
    const scene = new THREE.Scene();

    const camera = setupCamera();
    const renderer = setupRenderer();
    
    addSceneLight(scene);

    setupSkybox(scene, camera);

    addSceneObjects(scene);

    const focus = addEmpty(scene, { x: 0, y: 3, z: 0 });

    const controls = setupControls(camera, renderer, focus);

    animate(controls, renderer, scene, camera);
}