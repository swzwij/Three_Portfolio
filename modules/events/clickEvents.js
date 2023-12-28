import { mouse, raycaster } from '../interactors/mouseInteraction.js';
import { camera, lockCamera } from '../interactors/camera.js';
import { controls } from '../interactors/controls.js';
import { mainScene, machineInteractables, titleInteractables} from '../scenes/mainScene.js';

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

    // TODO: Refactor this to be more generic
    for (let i = 0; i < intersects.length; i++)
    {
        if (intersects[i].object === machineInteractables()[0])
        {
            lockCamera({ x: -3, y: 2.5, z: 1.5 }, { x: -7, y: 2.5, z: 1.5 })
        }

        if (intersects[i].object === machineInteractables()[1])
        {
            lockCamera({ x: -3, y: 2.5, z: -1.5 }, { x: -7, y: 2.5, z: -1.5 })
        }

        if (intersects[i].object === machineInteractables()[2])
        {
            lockCamera({ x: 1.5, y: 2.5, z: -3 }, { x: 1.5, y: 2.5, z: -7 })
        }

        if (intersects[i].object === titleInteractables()[0])
        {
            lockCamera({ x: 0, y: 8.75, z: -4.65 }, { x: 0, y: 8.75, z: -5.65 })
        }
    }
}