import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export function setupControls(camera, renderer, cube) 
{
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.copy(cube.position);
    return controls;
}