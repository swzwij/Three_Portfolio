export function lerpPosition(object, target, speed)
{
    const startPosition = object.position;

    object.position.copy(startPosition);

    let delta = 0;

    function animate() 
    {
        requestAnimationFrame(animate);

        delta += speed;
        delta = Math.min(delta, 1); 

        object.position.lerp(target, delta);
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