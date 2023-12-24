import * as THREE from 'three';
import { setupCamera } from './threejs_modules/camera.js';
import { setupRenderer } from './threejs_modules/renderer.js';
import { setupControls } from './threejs_modules/controls.js';
import { addSceneLight } from './threejs_modules/light.js';
import { addClickBox, addCube, addEmpty } from './threejs_modules/objects.js';
import { animate } from './threejs_modules/animation.js';
import { setupSkybox } from './threejs_modules/skybox.js';
import { addSceneObjects, addSceneTest } from './threejs_modules/scene.js';

let raycaster, mouse, camera, scene;
let arcade_machine_1, arcade_machine_2, arcade_machine_3;

export function init() 
{
    scene = new THREE.Scene();
    scene.fog = new THREE.Fog( 0x000000, 50, 100 );

    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    arcade_machine_1 = addClickBox(scene, { x: -3, y: 2, z: 1.5 }, { x: 0, y: 0, z: 0 }, { x: 2, y: 4, z: 2 }, false);
    arcade_machine_2 = addClickBox(scene, { x: -3, y: 2, z: -1.5 }, { x: 0, y: 0, z: 0 }, { x: 2, y: 4, z: 2 }, false);
    arcade_machine_3 = addClickBox(scene, { x: 1.5, y: 2, z: -3 }, { x: 0, y: 0, z: 0 }, { x: 2, y: 4, z: 2 }, false);

    camera = setupCamera();
    const renderer = setupRenderer();
    
    addSceneLight(scene);

    //setupSkybox(scene, camera);

    addSceneObjects(scene);
    //addSceneTest(scene);



    const focus = addEmpty(scene, { x: 0, y: 3, z: 0 });

    const controls = setupControls(camera, renderer, focus);

    window.addEventListener('click', onMouseClick, false);

    animate(controls, renderer, scene, camera);
}

function onMouseClick(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(scene.children);

    for (let i = 0; i < intersects.length; i++) 
    {
        if (intersects[i].object === arcade_machine_1) 
        {
            console.log('Machine 1 was clicked');
        }

        if (intersects[i].object === arcade_machine_2) 
        {
            console.log('Machine 2 was clicked');
        }

        if (intersects[i].object === arcade_machine_3) 
        {
            console.log('Machine 3 was clicked');
        }
    }
} 