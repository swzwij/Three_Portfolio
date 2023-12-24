import * as THREE from 'three';
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper.js';

export function addSceneLight(scene)
{
    const ambientLight = new THREE.AmbientLight( 0x404040 );
    scene.add(ambientLight);
}

export function addPointLight(scene, position, color, intensity)
{
    const light = new THREE.PointLight(color, intensity, 100);
    light.position.set(position.x, position.y, position.z);

    applyShadowCasting(light);

    scene.add(light);
}

export function addSpotLight(scene, position, color, intensity, distance = 100, angle = 1, penumbra = 0.25, decay = 1.25)
{
    const light = new THREE.SpotLight(color, intensity, distance, angle, penumbra, decay);
    light.position.set(position.x, position.y, position.z);

    applyShadowCasting(light);

    scene.add(light);
}

export function addAreaLight(scene, width, height, intensity, position, rotation, color, helper = false)
{
    const rectLight = new THREE.RectAreaLight( color, intensity,  width, height );
    rectLight.position.set( position.x, position.y, position.z );
    rectLight.lookAt( rotation.x, rotation.y, rotation.z);
    scene.add( rectLight )

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