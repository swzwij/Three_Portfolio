import * as THREE from 'three';
import { setupCamera } from './threejs_modules/camera.js';
import { setupRenderer } from './threejs_modules/renderer.js';
import { setupControls } from './threejs_modules/controls.js';
import { addLight } from './threejs_modules/light.js';
import { addFBX, addCube, addPlane, addEmpty } from './threejs_modules/objects.js';
import { animate } from './threejs_modules/animation.js';

export function init() 
{
    const scene = new THREE.Scene();

    const camera = setupCamera();
    const renderer = setupRenderer();
    
    addLight(scene);

    const focus = addEmpty(scene, { x: 0, y: 3, z: 0 });

    addFBX(scene, 'models/room.fbx', { x: 0, y: 0, z: 0 }, 0.01, { x: 0, y: 0, z: 0 });

    addFBX(scene, 'models/arcade_machine.fbx', { x: -3, y: 0, z: -1.5 }, 0.01, { x: 0, y: 0, z: 0 }, 0x0059e8);
    addFBX(scene, 'models/arcade_machine.fbx', { x: -3, y: 0, z: 1.5 }, 0.01, { x: 0, y: 0, z: 0 }, 0x0059e8);
    
    addFBX(scene, 'models/arcade_machine.fbx', { x: 1.5, y: 0, z: -3 }, 0.01, { x: 0, y: 270, z: 0 }, 0x0059e8);

    addFBX(scene, 'models/frame.fbx', { x: -4.5, y: 5.7, z: 0 }, 0.0075, { x: 0, y: 270, z: 0 }, 0x0059e8);
    addFBX(scene, 'models/frame.fbx', { x: -4.5, y: 6.2, z: 2 }, 0.0075, { x: 0, y: 270, z: 0 }, 0x0059e8);
    addFBX(scene, 'models/frame.fbx', { x: -4.5, y: 5.8, z: 4 }, 0.0075, { x: 0, y: 270, z: 0 }, 0x0059e8);
    addFBX(scene, 'models/frame.fbx', { x: -4.5, y: 6, z: -2.5 }, 0.0075, { x: 0, y: 270, z: 0 }, 0x0059e8);
    
    addFBX(scene, 'models/frame.fbx', { x: -3.5, y: 6, z: -4.5 }, 0.0075, { x: 0, y: 180, z: 0 }, 0x0059e8);
    addFBX(scene, 'models/frame.fbx', { x: -1.7, y: 6.3, z: -4.5 }, 0.0075, { x: 0, y: 180, z: 0 }, 0x0059e8);
    addFBX(scene, 'models/frame.fbx', { x: 0.2, y: 5.7, z: -4.5 }, 0.0075, { x: 0, y: 180, z: 0 }, 0x0059e8);
    addFBX(scene, 'models/frame.fbx', { x: 2.5, y: 6.1, z: -4.5 }, 0.0075, { x: 0, y: 180, z: 0 }, 0x0059e8);

    const controls = setupControls(camera, renderer, focus);

    animate(controls, renderer, scene, camera);
}