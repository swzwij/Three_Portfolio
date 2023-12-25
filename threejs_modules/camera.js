import * as THREE from 'three';
import { lerpLookAt, lerpCamera } from './lerp';

const cameraPosition = { x: 7.5, y: 5, z: 7.5 };

export function setupCamera() 
{
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
    return camera;
}

export function lockCamera(camera, controls, position, lookAt)
{
    //camera.position.set(position.x, position.y, position.z);

    lerpCamera(camera, position, controls, lookAt, 0.01);
    //lerpLookAt(controls, lookAt, 0.01);
    //controls.target.copy({x: lookAt.x, y: lookAt.y, z: lookAt.z});
}

export function unlockCamera(camera, controls, object)
{
    camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
    controls.target.copy(object.position);
}