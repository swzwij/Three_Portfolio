import * as THREE from 'three';
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper.js';
import { sceneInstance } from './scene.js';

export function addSceneLight()
{
    const ambientLight = new THREE.AmbientLight( 0x404040 );
    sceneInstance().add(ambientLight);
}

export function addPointLight(position, color, intensity)
{
    const light = new THREE.PointLight(color, intensity, 100);
    light.position.set(position.x, position.y, position.z);

    applyShadowCasting(light);

    sceneInstance().add(light);
}

export function addSpotLight(position, color, intensity, distance = 100, angle = 1, penumbra = 0.25, decay = 1.25)
{
    const light = new THREE.SpotLight(color, intensity, distance, angle, penumbra, decay);
    light.position.set(position.x, position.y, position.z);

    applyShadowCasting(light);

    sceneInstance().add(light);
}

export function addAreaLight(width, height, intensity, position, rotation, color, helper = false)
{
    const rectLight = new THREE.RectAreaLight( color, intensity,  width, height );
    rectLight.position.set( position.x, position.y, position.z );
    rectLight.lookAt( rotation.x, rotation.y, rotation.z);
    sceneInstance().add( rectLight )

    if (helper)
    {
        const rectLightHelper = new RectAreaLightHelper( rectLight );
        rectLight.add( rectLightHelper );
    }
}

function applyShadowCasting(light)
{
    light.castShadow = true;

    light.shadow.mapSize.width = 1024;
    light.shadow.mapSize.height = 1024;

    light.shadow.camera.visible = true;
    light.shadow.camera.near = 0.5;
    light.shadow.camera.far = 50;
}