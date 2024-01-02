import * as THREE from 'three';
import { addFBX, addPlane, addClickable, addRoom, addMachine } from '../objects/objects';
import { addPointLight } from '../objects/light';
import { addAreaLight } from '../objects/light';
import { addText } from '../objects/text';
import { CSSObject, createIframe } from '../objects/cssEmbed';
import { focusObject } from '../objects/focusObject';

let scene;
let machineInteractable_1, machineInteractable_2, machineInteractable_3;
let titleInteractable;

let websiteArcadeMachine_1, websiteArcadeMachine_2, websiteArcadeMachine_3;

export const mainScene = () => scene;
export const interactableInstances = () => [machineInteractable_1, machineInteractable_2, machineInteractable_3, titleInteractable];

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

    // ddFBX('models/arcade_machine.fbx', { x: -3.2, y: 0, z: -1.5 });
    // addFBX('models/arcade_machine.fbx', { x: -3.2, y: 0, z: 1.5 });
    // addFBX('models/arcade_machine.fbx', { x: 1.5, y: 0, z: -3.2 }, {x: 0, y: 270, z: 0});

    addMachine({ x: -3.25, y: 0, z: 1.25 }, { x: 0, y: 0, z: 0 }, 0x0000ff);
    addMachine({ x: -2, y: 0, z: -2 }, { x: 0, y: 315, z: 0 }, 0xff0000);
    addMachine({ x: 1.25, y: 0, z: -3.25 }, { x: 0, y: 270, z: 0 }, 0x00ff00);

    // Arcade machine lights
    // addPointLight({ x: -2.5, y: 2.5, z: -1.5 }, 0xff0000, 1);
    // addPointLight({ x: -2.5, y: 2.5, z: 1.5 }, 0x00ff00, 1);
    // addPointLight({ x: 1.5, y: 2.5, z: -2.5 }, 0x0000ff, 1);

    // Arcade machine headers
    addText("Projects", { x: -2.4, y: 3.925, z: 2 }, { x: 0, y: 90, z: 0 }, 30, 0xffffff);
    addText("About Me", { x: -2, y: 3.925, z: -0.7 }, { x: 0, y: 45, z: 0 }, 30, 0xffffff);
    addText("Skills", { x: 0.8, y: 3.925, z: -2.4 }, { x: 0, y: 0, z: 0 }, 30, 0xffffff);

    // Arcade machine website
    websiteArcadeMachine_1 = CSSObject
    (
        createIframe('./sub-pages/projects.html', '2000px', '1600px'),
        { x: -2.625, y: 2.8875, z: 1.25 },
        { x: 0, y: 0, z: 0 },
        { x: 0.001, y: 0.001, z: 1 }
    );

    websiteArcadeMachine_1.rotation.order = 'YXZ';
    websiteArcadeMachine_1.rotation.x = -10 * (Math.PI / 180);
    websiteArcadeMachine_1.rotation.y = 90 * (Math.PI / 180);

    websiteArcadeMachine_2 = CSSObject
    (
        createIframe('./sub-pages/about-me.html', '2000px', '1600px'),
        { x: -1.55, y:2.8875, z: -1.55 },
        { x: 0, y: 0, z: 0 },
        { x: 0.001, y: 0.001, z: 1 }
    );

    websiteArcadeMachine_2.rotation.order = 'YXZ';
    websiteArcadeMachine_2.rotation.x = -10 * (Math.PI / 180);
    websiteArcadeMachine_2.rotation.y = 45 * (Math.PI / 180);

    websiteArcadeMachine_3 = CSSObject
    (
        createIframe('./sub-pages/skills.html', '2000px', '1600px'),
        { x: 1.25, y: 2.8875, z: -2.625 },
        { x: 0, y: 0, z: 0 },
        { x: 0.001, y: 0.001, z: 1 }
    );

    websiteArcadeMachine_3.rotation.order = 'YXZ';
    websiteArcadeMachine_3.rotation.x = -10 * (Math.PI / 180);
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
    const scale = { x: 2.25, y: 4.5, z: 2.35 };
    const helper = false;

    const machineClickable_1 = addClickable({ x: -3, y: 2.25, z: 1.25 }, { x: 0, y: 0, z: 0 }, scale, helper);
    machineInteractable_1 = new focusObject({ x: -3, y: 2.8, z: 1.25 }, { x: -6.5, y: 2.5, z: 1.25 }, machineClickable_1);
    machineInteractable_1.setWebsite(websiteArcadeMachine_1);

    const machineClickable_2 = addClickable({ x: -1.9, y: 2.25, z: -1.9 }, { x: 0, y: 315, z: 0 }, scale, helper);
    machineInteractable_2 = new focusObject({ x: -0.75, y: 2.85, z: -0.75 }, { x: -6.5, y: 2.5, z: -6.5 }, machineClickable_2);

    const machineClickable_3 = addClickable({ x: 1.25, y: 2.25, z: -3 }, { x: 0, y: 270, z: 0 }, scale, helper);
    machineInteractable_3 = new focusObject({ x: 1.25, y: 2.8, z: -3 }, { x: 1.25, y: 2.5, z: -6.5 }, machineClickable_3);

    const titleClickable = addClickable({ x: 0, y: 8.75, z: -4.65 }, { x: 0, y: 0, z: 0 }, { x: 8, y: 1.75, z: 2 }, false);
    titleInteractable = new focusObject({ x: 0, y: 8.75, z: -4.65 }, { x: 0, y: 8.75, z: -5.65 }, titleClickable);
}