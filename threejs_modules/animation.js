import { sceneInstance } from "./scene";

export function animate(controls, renderer, camera, cssRenderer) 
{
    requestAnimationFrame(() => animate(controls, renderer, camera, cssRenderer));
    controls.update();
    camera.layers.set(0);
    renderer.render(sceneInstance(), camera);
    camera.layers.set(1);
    cssRenderer.render(sceneInstance(), camera);
}