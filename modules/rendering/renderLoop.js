import { renderer, cssRenderer } from "./renderers";
import { controls } from "../interactors/controls";
import { camera } from "../interactors/camera";
import { mainScene } from "../scenes/mainScene";

export function renderUpdate()
{
    requestAnimationFrame(() => renderUpdate(controls(), renderer(), camera(), cssRenderer()));

    controls().update();

    camera().layers.set(0);
    renderer().render(mainScene(), camera());

    camera().layers.set(1);
    cssRenderer().render(mainScene(), camera());
}