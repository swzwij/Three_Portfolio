import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export function setupControls(camera, renderer, object) 
{
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.copy(object.position);
    return controls;
}