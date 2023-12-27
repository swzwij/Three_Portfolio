import * as THREE from './node_modules/three/build/three.module.js';
import { setupCamera, lockCamera, unlockCamera } from './threejs_modules/camera.js';
import { setupRenderer } from './threejs_modules/renderer.js';
import { setupControls } from './threejs_modules/controls.js';
import { addSceneLight } from './threejs_modules/light.js';
import { addClickBox, addCube, addEmpty } from './threejs_modules/objects.js';
import { animate } from './threejs_modules/animation.js';
import { setupSkybox } from './threejs_modules/skybox.js';
import { addSceneObjects, addSceneTest, sceneInstance, initScene } from './threejs_modules/scene.js';
import { addText } from './threejs_modules/text.js';
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import { setupCSSRenderer } from './threejs_modules/css-renderer.js';
import { createIframe, CSSImage, CSSObject } from './threejs_modules/css-embed.js';
import { aboutMe } from './sub-pages/about-me.js';

let raycaster, mouse, camera;
let controls, focus;
let arcade_machine_1, arcade_machine_2, arcade_machine_3, title;

export function init() 
{
    initScene();
    
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    arcade_machine_1 = addClickBox({ x: -3, y: 2, z: 1.5 }, { x: 0, y: 0, z: 0 }, { x: 2, y: 4, z: 2 }, false);
    arcade_machine_2 = addClickBox({ x: -3, y: 2, z: -1.5 }, { x: 0, y: 0, z: 0 }, { x: 2, y: 4, z: 2 }, false);
    arcade_machine_3 = addClickBox({ x: 1.5, y: 2, z: -3 }, { x: 0, y: 0, z: 0 }, { x: 2, y: 4, z: 2 }, false);
    
    title = addClickBox({ x: 0, y: 8.75, z: -4.65 }, { x: 0, y: 0, z: 0 }, { x: 8, y: 1.75, z: 2 }, false);

    camera = setupCamera();
    const cssRenderer = setupCSSRenderer();
    const renderer = setupRenderer();
    
    addSceneLight();

    addSceneObjects();

    addText("Samuel Zwijsen", { x: -4.65, y: 8.25, z: 4.65 }, { x: 0, y: 90, z: 0 }, 80, 0xffffff);
    addText("• Game", { x: -4, y: 8.8, z: -4.65 }, { x: 0, y: 0, z: 0 }, 40, 0xffffff);
    addText("• Backend", { x: -4, y: 8.25, z: -4.65 }, { x: 0, y: 0, z: 0 }, 40, 0xffffff);
    addText("Developer", { x: -1, y: 8.25, z: -4.65 }, { x: 0, y: 0, z: 0 }, 80, 0xffffff);
    
    addText("Projects", { x: -2.2, y: 3.9, z: 2.25 }, { x: 0, y: 90, z: 0 }, 30, 0xffffff);
    addText("About Me", { x: -2.2, y: 3.9, z: -0.6 }, { x: 0, y: 90, z: 0 }, 30, 0xffffff);
    addText("Bonus", { x: 0.9, y: 3.9, z: -2.2 }, { x: 0, y: 0, z: 0 }, 30, 0xffffff);

    focus = addEmpty({ x: 0, y: 3, z: 0 });

    controls = setupControls(camera, renderer, focus);

    const iframe = createIframe('./sub-pages/projects.html', '360px', '360px')
    CSSObject(iframe, { x: -3, y: 2.5, z: 1.5 }, { x: 0, y: 90 * (Math.PI / 180), z: 0 }, { x: 0.005, y: 0.005, z: 0.005 });

    CSSImage('./icons/pfp.png', { x: 0, y: 2.5, z: 0 }, { x: 0, y: 90 * (Math.PI / 180), z: 0 }, { x: 0.005, y: 0.005, z: 0.005 });

    aboutMe();

    window.addEventListener('click', onMouseClick, false);
    window.addEventListener('keydown', onKeyDown, false);

    animate(controls, renderer, camera, cssRenderer);
}

function onMouseClick(event) 
{
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(sceneInstance().children);

    for (let i = 0; i < intersects.length; i++) 
    {
        if (intersects[i].object === arcade_machine_1) 
        {
            lockCamera(camera, controls, { x: -3, y: 2.5, z: 1.5 }, { x: -7, y: 2.5, z: 1.5 })
        }

        if (intersects[i].object === arcade_machine_2) 
        {
            lockCamera(camera, controls, { x: -3, y: 2.5, z: -1.5 }, { x: -7, y: 2.5, z: -1.5 })
        }

        if (intersects[i].object === arcade_machine_3) 
        {
            lockCamera(camera, controls, { x: 1.5, y: 2.5, z: -3 }, { x: 1.5, y: 2.5, z: -7 })
        }

        if (intersects[i].object === title)
        {
            lockCamera(camera, controls, { x: 0, y: 8.75, z: -4.65 }, { x: 0, y: 8.75, z: -5.65 })
        }
    }
} 

function onKeyDown(event) 
{
    if (event.code === 'Backspace' || event.code === 'Escape') 
        unlockCamera(camera, controls, focus);
}