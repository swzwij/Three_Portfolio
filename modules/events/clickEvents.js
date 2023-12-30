import { mouse, raycaster } from '../interactors/mouseInteraction.js';
import { camera, lockCamera } from '../interactors/camera.js';
import { mainScene, interactableInstances} from '../scenes/mainScene.js';

export function initClickEvents()
{
    window.addEventListener('click', onMouseClick, false);
}

function onMouseClick(event)
{
    mouse().x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse().y = - (event.clientY / window.innerHeight) * 2 + 1;

    raycaster().setFromCamera(mouse(), camera());

    const intersects = raycaster().intersectObjects(mainScene().children);

    for (let i = 0; i < intersects.length; i++)
    {
        for (let j = 0; j < interactableInstances().length; j++)
        {
            const interactable = interactableInstances()[j];
            if (intersects[i].object === interactable.clickable())
            {
                if (!interactable.isClickable())
                {
                    continue;
                }

                lockCamera(interactable.cameraPosition(), interactable.cameraDirection());

                interactable.setClickable(false);

                console.log(intersects[i].object)
            }
        }
    }
}