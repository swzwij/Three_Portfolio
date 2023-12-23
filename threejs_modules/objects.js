import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

export function addCube(scene, position = { x: 0, y: 0.5, z: 0 }, rotation = { x: 0, y: 0, z: 0 }) 
{
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x0059e8 });
    material.receiveShadow = true;

    const cube = new THREE.Mesh(geometry, material);

    applyTransformations(cube, position, rotation)

    cube.castShadow = true;
    cube.receiveShadow = true;

    scene.add(cube);
    
    return cube;
}

export function addPlane(scene) 
{
    const geometry = new THREE.PlaneGeometry(10, 10);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const plane = new THREE.Mesh(geometry, material);

    plane.rotation.x = -Math.PI / 2;
    plane.position.y = 0;

    plane.receiveShadow = true;

    scene.add(plane);

    return plane;
}

export function addFBX(scene, path, position = { x: 0, y: 0.5, z: 0 }, scale, rotation = { x: 0, y: 0, z: 0 }, color = 0xffffff) 
{
    const loader = new FBXLoader();
    loader.load(path, (object) => 
    {
        applyTransformations(object, position, rotation);
        object.scale.set(scale, scale, scale);
        object.material = new THREE.MeshStandardMaterial({ color: color });
        object.receiveShadow = true;
        object.castShadow = true;
        scene.add(object);
    }, 
    undefined, (error) => 
    {
        console.error('Error loading FBX:', error);
    });
}

export function addEmpty(scene, position)
{
    const object = new THREE.Object3D();
    applyTransformations(object, position);
    scene.add(object);

    return object;
}

function applyTransformations(object, position, rotation = { x: 0, y: 0, z: 0 }) {
    object.rotation.x = rotation.x * (Math.PI / 180);
    object.rotation.y = rotation.y * (Math.PI / 180);
    object.rotation.z = rotation.z * (Math.PI / 180);

    object.position.x = position.x;
    object.position.y = position.y;
    object.position.z = position.z;
}