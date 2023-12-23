import * as THREE from 'three';

export function addSceneLight(scene)
{
    const dircationalLight = new THREE.DirectionalLight(0xffffff, 1);

    dircationalLight.position.set(0, 5, 10);
    dircationalLight.castShadow = true;

    dircationalLight.shadow.mapSize.width = 1024; 
    dircationalLight.shadow.mapSize.height = 1024;

    dircationalLight.shadow.camera.visible = true;
    dircationalLight.shadow.camera.near = 0.5;
    dircationalLight.shadow.camera.far = 50;
    
    scene.add(dircationalLight);
    
    const ambientLight = new THREE.AmbientLight( 0x404040 );
    scene.add(ambientLight);
}

export function addPointLight(scene, position, color, intensity)
{
    const light = new THREE.PointLight(color, intensity, 100);
    light.position.set(position.x, position.y, position.z);
    scene.add(light);
}