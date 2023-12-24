import * as THREE from 'three';
import { addAreaLight, addPointLight, addSceneLight, addSpotLight } from './light.js';
import { addCube, addFBX, addLamp, addPlane, addRoom } from './objects.js';

export function addSceneObjects(scene) 
{
    addPlane(scene, 250, -1.1);

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
        
    addRoom(scene);

    addPointLight(scene, { x: -2.5, y: 2.5, z: -1.5 }, 0xff0000, 1);
    addPointLight(scene, { x: -2.5, y: 2.5, z: 1.5 }, 0x00ff00, 1);
    addPointLight(scene, { x: 1.5, y: 2.5, z: -2.5 }, 0x0000ff, 1);

    const wallLightIntensity = 10;
    const wallLightColor = 0xfff8ab;

    // // Left wall lighting
    // addLamp(scene, { x: -3.9, y: 6.25, z: 1 }, { x: 0, y: 0, z: 0 }, wallLightIntensity, wallLightColor);
    // addLamp(scene, { x: -3.9, y: 6.25, z: 4 }, { x: 0, y: 0, z: 0 }, wallLightIntensity, wallLightColor);
    // addLamp(scene, { x: -3.9, y: 6.25, z: -2 }, { x: 0, y: 0, z: 0 }, wallLightIntensity, wallLightColor);

    // // Right wall lighting
    // addLamp(scene, { x: 1, y: 6.25, z: -3.9 }, { x: 0, y: 0, z: 0 }, wallLightIntensity, wallLightColor);
    // addLamp(scene, { x: 4, y: 6.25, z: -3.9 }, { x: 0, y: 0, z: 0 }, wallLightIntensity, wallLightColor);
    // addLamp(scene, { x: -2, y: 6.25, z: -3.9 }, { x: 0, y: 0, z: 0 }, wallLightIntensity, wallLightColor);

    // Under lighting
    addAreaLight(scene, 10, .5, 25, { x: 0, y: -.3, z: 5 }, { x: 0, y: -.3, z: 6 }, 0x0000ff);
    addAreaLight(scene, 10, .5, 25, { x: 5, y: -.3, z: 0 }, { x: 6, y: -.3, z: 0 }, 0x0000ff);
    
    const stripeIntensity = 2;

    // Left stripe lighting
    addAreaLight(scene, 1, 10.25, stripeIntensity, { x: -4.65, y: 3.25, z: 0 }, { x: -4.65, y: 0, z: 0 }, 0xffff00);
    addAreaLight(scene, 1, 10.25, stripeIntensity, { x: -4.65, y: 3.25, z: 0 }, { x: -4.65, y: 3.5, z: 0 }, 0xffff00);
    addAreaLight(scene, 1, 10.25, stripeIntensity, { x: -4.65, y: 2.75, z: 0 }, { x: -4.65, y: 0, z: 0 }, 0xffff00);
    addAreaLight(scene, 1, 10.25, stripeIntensity, { x: -4.65, y: 2.75, z: 0 }, { x: -4.65, y: 3.5, z: 0 }, 0xffff00);

    // Right stripe lighting
    addAreaLight(scene, 10.25, 1, stripeIntensity, { x: 0, y: 3.25, z: -4.65 }, { x: 0, y: 0, z: -4.65 }, 0xffff00);
    addAreaLight(scene, 10.25, 1, stripeIntensity, { x: 0, y: 3.25, z: -4.65 }, { x: 0, y: 3.5, z: -4.65 }, 0xffff00);
    addAreaLight(scene, 10.25, 1, stripeIntensity, { x: 0, y: 2.75, z: -4.65 }, { x: 0, y: 0, z: -4.65 }, 0xffff00);
    addAreaLight(scene, 10.25, 1, stripeIntensity, { x: 0, y: 2.75, z: -4.65 }, { x: 0, y: 3.5, z: -4.65 }, 0xffff00);
    
    // Wall lighting
    addAreaLight(scene, 10, .1, wallLightIntensity, { x: 0, y: 7, z: -4.25 }, { x: 0, y: 3.5, z: -4.25 }, wallLightColor);
    addAreaLight(scene, .1, 10, wallLightIntensity, { x: -4.25, y: 7, z: 0 }, { x: -4.25, y: 3.5, z: 0 }, wallLightColor);
}

export function addSceneTest(scene)
{
    addPlane(scene, 25);
    addCube(scene, { x: -1, y: 0.5, z: 0 }, { x: 0, y: 0, z: 0 });
    addCube(scene, { x: -2.5, y: 2.5, z: 0.5 }, { x: 0, y: 0, z: 0 });
    addFBX(scene, 'models/default_cube.fbx', { x: -3, y: 1, z: 0 }, 0.01, { x: 0, y: 0, z: 0 });
    
    addCube(scene, { x: 3, y: 0.5, z: 0 }, { x: 0, y: 0, z: 0 });
    addCube(scene, { x: 4, y: 0.5, z: 1 }, { x: 0, y: 0, z: 0 });
}