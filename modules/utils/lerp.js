export function lerpCamera(object, targetPosition, controls, targetControlsPosition, duration, canRotate)
{
    const startPosition = object.position.clone();
    const startControlsTarget = controls.target.clone();

    controls.enableRotate = false;
    controls.enableZoom = false;

    let startTime = performance.now();
    let animationFrameId;

    const easeOutCubic = t => 1 - Math.pow(1 - t, 3);

    function animate()
    {
        let currentTime = performance.now();
        let elapsed = (currentTime - startTime) / 1000;
        let delta = elapsed / duration;

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

export function fadeObject(mesh, startOpacity, endOpacity, duration)
{
    const startTime = performance.now();

    function update()
    {
        const currentTime = performance.now();
        const elapsed = currentTime - startTime;
        const fraction = elapsed / duration;

        mesh.material.opacity = THREE.MathUtils.lerp(startOpacity, endOpacity, fraction);

        if (fraction < 1)
        {
            requestAnimationFrame(update);
        }
    }

    update();
}