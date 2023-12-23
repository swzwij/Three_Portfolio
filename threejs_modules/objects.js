import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

export function addCube(scene, position = { x: 0, y: 0.5, z: 0 }, rotation = { x: 0, y: 0, z: 0 }) 
{
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial({ color: 0x0059e8 });
    material.receiveShadow = true;

    const cube = new THREE.Mesh(geometry, material);

    applyTransformations(cube, position, rotation)

    cube.castShadow = true;
    cube.receiveShadow = true;

    scene.add(cube);
    
    return cube;
}

export function addPlane(scene, scale =10) 
{
    const geometry = new THREE.PlaneGeometry(scale, scale);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: .5, roughness: .5});
    const plane = new THREE.Mesh(geometry, material);

    plane.rotation.x = -Math.PI / 2;
    plane.position.y = 0;

    plane.receiveShadow = true;

    scene.add(plane);

    return plane;
}

export function addFBX(scene, path, position = { x: 0, y: 0.5, z: 0 }, scale, rotation = { x: 0, y: 0, z: 0 }) 
{
    const loader = new FBXLoader();
    loader.load(path, (object) => 
    {
        applyTransformations(object, position, rotation);
        object.scale.set(scale, scale, scale);
        object.receiveShadow = true;
        object.castShadow = true;

        object.traverse((child) => 
        {
            if (child.isMesh) 
            {
                //child.material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });

        scene.add(object);
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