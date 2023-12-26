export function animate(controls, renderer, scene, camera, cssRenderer) 
{
    requestAnimationFrame(() => animate(controls, renderer, scene, camera, cssRenderer));
    controls.update();
    camera.layers.set(0);
    renderer.render(scene, camera);
    camera.layers.set(1);
    cssRenderer.render(scene, camera);
}