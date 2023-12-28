import { initRenderer, initCSSRenderer } from './modules/renderers.js';
import { initMouseInteraction } from './modules/interactors/mouseInteraction.js';
import { initClickEvents } from './modules/events/clickEvents.js';
import { initKeyEvents } from './modules/events/keyEvents.js';
import { initControls } from './modules/interactors/controls.js';
import { initCamera } from './modules/interactors/camera.js';
import { initScene } from './modules/scenes/mainScene.js';
import { animate } from './modules/animation.js';

export function init()
{
    initScene();

    initRenderer();
    initCSSRenderer();

    initMouseInteraction();
    initCamera();
    initControls()

    initClickEvents();
    initKeyEvents();

    animate();
}