export function lerpCamera(object, targetPosition, controls, targetControlsPosition, speed, canRotate)
{
    const startPosition = object.position.clone();
    const startControlsTarget = controls.target.clone();

    controls.enableRotate = false;
    controls.enableZoom = false;

    let delta = 0;
    let animationFrameId;

    const easeOutCubic = t => 1 - Math.pow(1 - t, 3);

    function animate()
    {
        delta += speed;

        if (delta >= 1)
        {
            delta = 1;
            controls.target.copy(targetControlsPosition);
            object.position.copy(targetPosition);

            controls.enableRotate = canRotate;
            controls.enableZoom = true;

            cancelAnimationFrame(animationFrameId);
            return;
        }

        animationFrameId = requestAnimationFrame(animate);

        const easedDelta = easeOutCubic(delta);

        controls.target.copy(startControlsTarget).lerp(targetControlsPosition, easedDelta);
        object.position.copy(startPosition).lerp(targetPosition, easedDelta);

        controls.update();
    }

    animationFrameId = requestAnimationFrame(animate);
}