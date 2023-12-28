import { unlockCamera } from '../interactors/camera.js';
import { focus } from '../interactors/controls.js';

export function initKeyEvents()
{
    window.addEventListener('keydown', onKeyDown, false);
}

function onKeyDown(event)
{
    if (event.code === 'Backspace' || event.code === 'Escape')
        unlockCamera(focus());
}