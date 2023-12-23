import * as THREE from 'three';

export function addSceneLight(scene)
{
    const dircationalLight = new THREE.DirectionalLight(0xffffff, 1);

    dircationalLight.position.set(15, 10, 10);
    
    applyShadowCasting(dircationalLight);
    //scene.add(dircationalLight);
    
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

function applyShadowCasting(light)
{
    light.castShadow = true;

    light.shadow.mapSize.width = 1024;
    light.shadow.mapSize.height = 1024;

    light.shadow.camera.visible = true;
    light.shadow.camera.near = 0.5;
    light.shadow.camera.far = 50;
}