import { CSSImage, CSSObject } from "../modules/cssEmbed.js";
import { addText } from '../modules/text.js';

export function aboutMe()
{
    addText("Samuel Zwijsen", { x: -3.3, y: 3, z: -1 }, { x: 0, y: 90, z: 0 }, 10, 0xffffff, false, 0, 0);
    CSSImage('./icons/pfp.png', { x: -3.3, y: 3.075, z: -.85 }, { x: 0, y: 90 * (Math.PI / 180), z: 0 }, { x: 0.0005, y: 0.0005, z: 0.0005 });
    CSSImage('./icons/pfp.png', { x: -3.3, y: 2.5, z: -1.9 }, { x: 0, y: 90 * (Math.PI / 180), z: 0 }, { x: 0.0015, y: 0.0015, z: 0.0015 });
}