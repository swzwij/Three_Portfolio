import * as THREE from 'three';

export function addLight(scene)
{
    const light = new THREE.DirectionalLight(0xffffff, 1);

    light.position.set(0, 5, 10);
    light.castShadow = true;

    light.shadow.mapSize.width = 1024; 
    light.shadow.mapSize.height = 1024;

    light.shadow.camera.near = 0.5;
    light.shadow.camera.far = 50;
    
    scene.add(light);
}