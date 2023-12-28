import * as THREE from 'three';
import { addFBX, addPlane, addClickBox, addRoom } from '../objects/objects';
import { addPointLight } from '../objects/light';
import { addAreaLight } from '../objects/light';
import { addText } from '../objects/text';
import { CSSObject, createIframe } from '../objects/cssEmbed';

let scene;
let machineInteractable_1, machineInteractable_2, machineInteractable_3;
let titleInteractable;

export const mainScene = () => scene;
export const machineInteractables = () => [machineInteractable_1, machineInteractable_2, machineInteractable_3];
export const titleInteractables = () => [titleInteractable];

export function initScene()
{
    scene = new THREE.Scene();
    scene.fog = new THREE.Fog( 0x000000, 50, 100 );
    scene.add(new THREE.AmbientLight( 0x404040 ));

    initSceneObjects();
}

export function initSceneObjects()
{
    ground();
    exterior();
    interior();
    nameText();
    interactables();
}

function ground()
{
    addPlane(250, -1.1);
}

function interior()
{
    // Arcade machines
    addFBX('models/arcade_machine.fbx', { x: -3.2, y: 0, z: -1.5 });
    addFBX('models/arcade_machine.fbx', { x: -3.2, y: 0, z: 1.5 });
    addFBX('models/arcade_machine.fbx', { x: 1.5, y: 0, z: -3.2 }, {x: 0, y: 270, z: 0});

    // Arcade machine lights
    addPointLight({ x: -2.5, y: 2.5, z: -1.5 }, 0xff0000, 1);
    addPointLight({ x: -2.5, y: 2.5, z: 1.5 }, 0x00ff00, 1);
    addPointLight({ x: 1.5, y: 2.5, z: -2.5 }, 0x0000ff, 1);

    // Arcade machine headers
    addText("Projects", { x: -2.2, y: 3.9, z: 2.25 }, { x: 0, y: 90, z: 0 }, 30, 0xffffff);
    addText("About Me", { x: -2.2, y: 3.9, z: -0.6 }, { x: 0, y: 90, z: 0 }, 30, 0xffffff);
    addText("Bonus", { x: 0.9, y: 3.9, z: -2.2 }, { x: 0, y: 0, z: 0 }, 30, 0xffffff);

    // Arcade machine website
    CSSObject
    (
        createIframe('./sub-pages/projects.html', '360px', '360px'),
        { x: -3, y: 2.5, z: 1.5 },
        { x: 0, y: 90 * (Math.PI / 180), z: 0 },
        { x: 0.005, y: 0.005, z: 0.005 }
    );
}

function exterior()
{
    addRoom();

    // Under glow
    addAreaLight(10, .5, 25, { x: 0, y: -.3, z: 5 }, { x: 0, y: -.3, z: 6 }, 0x0000ff);
    addAreaLight(10, .5, 25, { x: 5, y: -.3, z: 0 }, { x: 6, y: -.3, z: 0 }, 0x0000ff);

    // Left stripe lighting
    const stripeIntensity = 2;

    addAreaLight(1, 10.25, stripeIntensity, { x: -4.65, y: 3.25, z: 0 }, { x: -4.65, y: 0, z: 0 }, 0xffff00);
    addAreaLight(1, 10.25, stripeIntensity, { x: -4.65, y: 3.25, z: 0 }, { x: -4.65, y: 3.5, z: 0 }, 0xffff00);
    addAreaLight(1, 10.25, stripeIntensity, { x: -4.65, y: 2.75, z: 0 }, { x: -4.65, y: 0, z: 0 }, 0xffff00);
    addAreaLight(1, 10.25, stripeIntensity, { x: -4.65, y: 2.75, z: 0 }, { x: -4.65, y: 3.5, z: 0 }, 0xffff00);

    // Right stripe lighting
    addAreaLight(10.25, 1, stripeIntensity, { x: 0, y: 3.25, z: -4.65 }, { x: 0, y: 0, z: -4.65 }, 0xffff00);
    addAreaLight(10.25, 1, stripeIntensity, { x: 0, y: 3.25, z: -4.65 }, { x: 0, y: 3.5, z: -4.65 }, 0xffff00);
    addAreaLight(10.25, 1, stripeIntensity, { x: 0, y: 2.75, z: -4.65 }, { x: 0, y: 0, z: -4.65 }, 0xffff00);
    addAreaLight(10.25, 1, stripeIntensity, { x: 0, y: 2.75, z: -4.65 }, { x: 0, y: 3.5, z: -4.65 }, 0xffff00);

    // Wall lighting
    const wallLightIntensity = 10;
    const wallLightColor = 0xfff8ab;

    addAreaLight(10, .1, wallLightIntensity, { x: 0, y: 7, z: -4.25 }, { x: 0, y: 3.5, z: -4.25 }, wallLightColor);
    addAreaLight(.1, 10, wallLightIntensity, { x: -4.25, y: 7, z: 0 }, { x: -4.25, y: 3.5, z: 0 }, wallLightColor);
}

function nameText()
{
    // Name and title
    addText("Samuel Zwijsen", { x: -4.65, y: 8.25, z: 4.65 }, { x: 0, y: 90, z: 0 }, 80, 0xffffff);
    addText("• Game", { x: -4, y: 8.8, z: -4.65 }, { x: 0, y: 0, z: 0 }, 40, 0xffffff);
    addText("• Backend", { x: -4, y: 8.25, z: -4.65 }, { x: 0, y: 0, z: 0 }, 40, 0xffffff);
    addText("Developer", { x: -1, y: 8.25, z: -4.65 }, { x: 0, y: 0, z: 0 }, 80, 0xffffff);
}

function interactables()
{
    machineInteractable_1 = addClickBox({ x: -3, y: 2, z: 1.5 }, { x: 0, y: 0, z: 0 }, { x: 2, y: 4, z: 2 }, false);
    machineInteractable_2 = addClickBox({ x: -3, y: 2, z: -1.5 }, { x: 0, y: 0, z: 0 }, { x: 2, y: 4, z: 2 }, false);
    machineInteractable_3 = addClickBox({ x: 1.5, y: 2, z: -3 }, { x: 0, y: 0, z: 0 }, { x: 2, y: 4, z: 2 }, false);

    titleInteractable = addClickBox({ x: 0, y: 8.75, z: -4.65 }, { x: 0, y: 0, z: 0 }, { x: 8, y: 1.75, z: 2 }, false);
}