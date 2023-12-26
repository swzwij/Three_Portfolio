import { CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer.js';

export function setupCSSRenderer() 
{
    const renderer = new CSS3DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = 0;
    renderer.domElement.style.pointerEvents = 'none';
    document.body.appendChild(renderer.domElement);
    return renderer;
}