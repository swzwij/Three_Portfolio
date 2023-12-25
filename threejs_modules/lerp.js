export function lerpCamera(object, targetPosition, controls, targetControlsPosition, speed) 
{
    const startPosition = object.position.clone();
    const startControlsTarget = controls.target.clone();

    let delta = 0;
    let animationFrameId;

    function easeOutCubic(t) 
    {
        return 1 - Math.pow(1 - t, 3);
    }

    function animate() 
    {
        delta += speed;
        if (delta >= 1) 
        {
            delta = 1;
            object.position.copy(targetPosition);
            controls.target.copy(targetControlsPosition);

            // Stop the animation
            cancelAnimationFrame(animationFrameId);
            return;
        }

        animationFrameId = requestAnimationFrame(animate);

        const easedDelta = easeOutCubic(delta);

        // Lerp the object's position
        object.position.copy(startPosition).lerp(targetPosition, easedDelta);

        // Lerp the controls' target
        controls.target.copy(startControlsTarget).lerp(targetControlsPosition, easedDelta);

        // Update controls
        controls.update();
    }

    animationFrameId = requestAnimationFrame(animate);
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