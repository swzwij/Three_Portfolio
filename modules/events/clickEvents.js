import { mainScene, interactableInstances} from '../scenes/mainScene.js';
import { camera, lockCamera } from '../interactors/camera.js';
import { raycaster } from '../interactors/mouseInteraction.js';

export function initClickEvents()
{
    window.addEventListener('click', onMouseClick, false);
}

function onMouseClick(event)
{
    const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    const mouseY = - (event.clientY / window.innerHeight) * 2 + 1;

    raycaster().setFromCamera({ x: mouseX, y: mouseY }, camera());

    const intersects = raycaster().intersectObjects(mainScene().children);

    intersects.forEach(intersect =>
    {
        const interactables = interactableInstances();
        interactables.forEach(interactable =>
        {
            if (intersect.object === interactable.clickable() && interactable.isClickable())
            {
                lockCamera(interactable.cameraPosition(), interactable.cameraDirection());
                interactable.setClickable(false);

                console.log(interactable.hasWebsite());
                console.log(interactable.website());

                if (interactable.hasWebsite())
                {
                    interactable.website().visable = true;
                }
            }
        });
    });
}