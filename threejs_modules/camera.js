import * as THREE from 'three';
import { lerpCamera } from './lerp';

const cameraPosition = { x: 7.5, y: 5, z: 7.5 };

export function setupCamera() 
{
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
    return camera;
}

export function lockCamera(camera, controls, position, lookAt)
{
    lerpCamera(camera, position, controls, lookAt, 0.01);
}

export function unlockCamera(camera, controls, object)
{
    lerpCamera(camera, cameraPosition, controls, object.position, 0.01);
}