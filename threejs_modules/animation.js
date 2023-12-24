export function animate(controls, renderer, scene, camera) 
{
    requestAnimationFrame(() => animate(controls, renderer, scene, camera));
    controls.update();
    renderer.render(scene, camera);
}