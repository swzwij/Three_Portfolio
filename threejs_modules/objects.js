import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { addPointLight } from './light';

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

export function addPlane(scene, scale =10, position = 0) 
{
    const geometry = new THREE.PlaneGeometry(scale, scale);
    const material = new THREE.MeshStandardMaterial({ color: 0x252525, metalness: 0, roughness: 1});
    const plane = new THREE.Mesh(geometry, material);

    plane.rotation.x = -Math.PI / 2;
    plane.position.y = position;

    plane.receiveShadow = true;

    scene.add(plane);

    return plane;
}

export function addFBX(scene, path, position = { x: 0, y: 0, z: 0 }, scale = 0.01, rotation = { x: 0, y: 0, z: 0 }) 
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
        return object;
    });
}

export function addEmpty(scene, position)
{
    const object = new THREE.Object3D();
    applyTransformations(object, position);
    scene.add(object);

    return object;
}

export function addRoom(scene)
{    
    roomPart(scene, 'models/room/base.fbx', 0x000000);
    roomPart(scene, 'models/room/floor.fbx', 0x1c7eff);
    roomPart(scene, 'models/room/black_tiles.fbx', 0x000000, 0.3, 0.3);
    roomPart(scene, 'models/room/white_tiles.fbx', 0xffffff, 0.3, 0.3);
    roomPart(scene, 'models/room/wall.fbx', 0x1c7eff, .1, .9);
    roomPart(scene, 'models/room/stripe.fbx', 0xffea00, 0, 1, true);
}

export function addLamp(scene, position, rotation, intensity, color = 0xf5ab00)
{
    //roomPart(scene, 'models/lamp/base.fbx', 0xcccccc, 0, 1, false, 0.005, position, rotation);
    roomPart(scene, 'models/lamp/lamp.fbx', color, 0, 1, true, 0.005, position, rotation);
    addPointLight(scene, position, color, intensity);
}

export function addClickBox(scene, position, rotation, scale, visible)
{
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const box = new THREE.Mesh(geometry, material);

    applyTransformations(box, position, rotation)
    box.scale.set(scale.x, scale.y, scale.z);

    box.material.visible = visible;

    scene.add(box);
    return box;
}

function roomPart(scene, path, color, metalness = 0, roughness = 1, emissive, scale = 0.01, position = { x: 0, y: 0, z: 0 }, rotation = { x: 0, y: 0, z: 0 })
{
    const loader = new FBXLoader();

    loader.load(path, (object) => 
    {
        applyTransformations(object, position, rotation);
        object.scale.set(scale, scale, scale);
        if(!emissive)
            object.receiveShadow = true;
        object.castShadow = true;

        object.traverse((child) => 
        {
            if (child.isMesh) 
            {
                child.material = new THREE.MeshStandardMaterial({ color: color, metalness: metalness, roughness: roughness });
                if(emissive)
                    child.material.emissive.set(color)
                else
                    object.receiveShadow = true;
                child.castShadow = true;
            }
        });
        scene.add(object);
        return object;
    });
}

function applyTransformations(object, position, rotation = { x: 0, y: 0, z: 0 }) {
    object.rotation.x = rotation.x * (Math.PI / 180);
    object.rotation.y = rotation.y * (Math.PI / 180);
    object.rotation.z = rotation.z * (Math.PI / 180);

    object.position.x = position.x;
    object.position.y = position.y;
    object.position.z = position.z;
}