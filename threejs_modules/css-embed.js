import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';

export function createIframe(source, width, height)
{
    const iframe = document.createElement('iframe');
    iframe.style.width = width;
    iframe.style.height = height;
    iframe.src = source;
    return iframe;
}

export function CSSObject(scene, iframe, position, rotation, scale)
{
    const cssObject = new CSS3DObject(iframe);
    cssObject.position.set(position.x, position.y, position.z);
    cssObject.rotation.set(rotation.x, rotation.y, rotation.z);
    cssObject.scale.set(scale.x, scale.y, scale.z);
    cssObject.layers.set(1);
    scene.add(cssObject);
    return cssObject;
}