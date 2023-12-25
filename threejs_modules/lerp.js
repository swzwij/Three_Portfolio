export function lerpCamera(object, targetPosition, controls, targetControlsPosition, speed) {
    const startPosition = object.position.clone();
    const startControlsTarget = controls.target.clone();

    let delta = 0;

    function animate() {
        requestAnimationFrame(animate);

        delta += speed;
        delta = Math.min(delta, 1); 

        // Lerp the object's position
        object.position.copy(startPosition).lerp(targetPosition, delta);

        // Lerp the controls' target
        controls.target.copy(startControlsTarget).lerp(targetControlsPosition, delta);

        // Update controls (important if controls are enabled)
        controls.update();
    }

    animate();
}


export function lerpLookAt(controls, target, speed)
{
    const startControlsTarget = controls.target;

    controls.target.copy(startControlsTarget);

    let delta = 0;

    function animate() {
        requestAnimationFrame(animate);

        delta += speed;
        delta = Math.min(delta, 1); 

        controls.target.copy(startControlsTarget).lerp(target, delta);
    }

    animate();
}