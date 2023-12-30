import { unlockCamera } from '../interactors/camera.js';
import { focus } from '../interactors/controls.js';
import { interactableInstances } from '../scenes/mainScene.js';

export function initKeyEvents()
{
    window.addEventListener('keydown', onKeyDown, false);
}

function onKeyDown(event)
{
    if (event.code === 'Backspace' || event.code === 'Escape')
    {
        unlockCamera(focus());
        resetClickables();
    }
}

function resetClickables()
{
    for (let i = 0; i < interactableInstances().length; i++)
    {
        interactableInstances()[i].setClickable(true);
    }
}