import { mainScene } from './scenes/mainScene';
import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';

export function createIframe(source, width, height)
{
    const iframe = document.createElement('iframe');
    iframe.style.width = width;
    iframe.style.height = height;
    iframe.src = source;
    return iframe;
}

export function CSSObject(iframe, position, rotation, scale)
{
    const cssObject = new CSS3DObject(iframe);
    cssObject.position.set(position.x, position.y, position.z);
    cssObject.rotation.set(rotation.x, rotation.y, rotation.z);
    cssObject.scale.set(scale.x, scale.y, scale.z);
    cssObject.layers.set(1);
    mainScene().add(cssObject);
}

export function CSSImage(source, position, rotation, scale)
{
    const element = document.createElement('div');
    element.innerHTML = `<img src="${source}">`;
    const cssObject = new CSS3DObject(element);
    cssObject.position.set(position.x, position.y, position.z);
    cssObject.rotation.set(rotation.x, rotation.y, rotation.z);
    cssObject.scale.set(scale.x, scale.y, scale.z);
    cssObject.layers.set(1);
    mainScene().add(cssObject);
}