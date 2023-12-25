export function animate(controls, renderer, scene, camera, cssRenderer) 
{
    requestAnimationFrame(() => animate(controls, renderer, scene, camera, cssRenderer));
    controls.update();
    renderer.render(scene, camera);
    cssRenderer.render(scene, camera);
}