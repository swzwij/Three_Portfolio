import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { addEmpty } from '../objects/objects.js';
import { camera } from './camera.js'
import { renderer } from '../rendering/renderers.js';

let _controls;
let _focus;

export const controls = () => _controls;

export const focus = () => _focus;

export function initControls()
{
    _focus = addEmpty({ x: 0, y: 3, z: 0 });

    _controls = new OrbitControls(camera(), renderer().domElement);
    _controls.target.copy(_focus.position);

    _controls.enablePan = false;

    _controls.minDistance = 5;
    _controls.maxDistance = 25;

    _controls.minPolarAngle = Math.PI / 4; // 45 degrees
    _controls.maxPolarAngle = Math.PI / 2; // 90 degrees
}