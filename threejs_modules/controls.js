import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export function setupControls(camera, renderer, object) 
{
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.copy(object.position);

    controls.enablePan = false;

    controls.minDistance = 5;
    controls.maxDistance = 25;

    controls.minPolarAngle = Math.PI / 4; // 45 degrees
    controls.maxPolarAngle = Math.PI / 2; // 90 degrees

    return controls;
}