import * as THREE from 'three';
import { lerpCamera } from '../lerp';
import { controls } from './controls';

let _camera;
let cameraPosition = { x: 7.5, y: 5, z: 7.5 };

export const camera = () => _camera;

export function initCamera()
{
    _camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    _camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
}

export function lockCamera(position, lookAt)
{
    lerpCamera(_camera, position, controls(), lookAt, 0.01);
}

export function unlockCamera(object)
{
    lerpCamera(_camera, cameraPosition, controls(), object.position, 0.01);
}