import * as THREE from 'three';

let _raycaster;
let _mouse;

export const raycaster = () => _raycaster;
export const mouse = () => _mouse;

export function initMouseInteraction()
{
    _raycaster = new THREE.Raycaster();
    _mouse = new THREE.Vector2();
}