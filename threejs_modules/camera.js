import * as THREE from 'three';

export function setupCamera() 
{
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(5, 5, 5);
    return camera;
}