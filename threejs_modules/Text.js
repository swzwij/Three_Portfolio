import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { sceneInstance } from './scene';

export function addText(text, position, rotation, size, color, bevel = true, bevelThickness = .1, bevelSize = .5)
{
    const loader = new FontLoader();
    loader.load('node_modules/three/examples/fonts/helvetiker_regular.typeface.json', function (font) 
    {
        const textGeometry = new TextGeometry(text, 
        {
            font: font,
            size: size,
            height: 5,
            curveSegments: 12,
            bevelEnabled: bevel,
            bevelThickness: bevelThickness,
            bevelSize: bevelSize,
            bevelOffset: 0,
            bevelSegments: 5
        });

        const textMaterial = new THREE.MeshBasicMaterial({ color: color });
        const textMesh = new THREE.Mesh(textGeometry, textMaterial);

        textMesh.position.set(position.x, position.y, position.z);
        textMesh.rotation.set(rotation.x * (Math.PI / 180), rotation.y * (Math.PI / 180), rotation.z * (Math.PI / 180));
        textMesh.scale.set(0.01, 0.01, 0.01);

        sceneInstance().add(textMesh);
        return textMesh;
    });
}