import * as THREE from 'three';
import { CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer.js';

let _renderer;
let _cssRenderer;

export const renderer = () => _renderer;
export const cssRenderer = () => _cssRenderer;

export function initRenderer()
{
    _renderer = new THREE.WebGLRenderer();
    _renderer.setSize(window.innerWidth, window.innerHeight);
    _renderer.shadowMap.enabled = true;
    document.body.appendChild(_renderer.domElement);
}

export function initCSSRenderer()
{
    _cssRenderer = new CSS3DRenderer();
    _cssRenderer.setSize(window.innerWidth, window.innerHeight);
    _cssRenderer.domElement.style.position = 'absolute';
    _cssRenderer.domElement.style.top = 0;
    _cssRenderer.domElement.style.pointerEvents = 'none';
    document.body.appendChild(_cssRenderer.domElement);
}