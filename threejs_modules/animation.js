export function animate(controls, renderer, scene, camera, cubeCamera, plane) 
{
    requestAnimationFrame(() => animate(controls, renderer, scene, camera));
    controls.update();
    renderer.render(scene, camera);
}