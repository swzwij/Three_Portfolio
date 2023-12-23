import * as THREE from 'three';

export function setupSkybox(scene, camera) 
{
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const context = canvas.getContext('2d');

    const gradient = context.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, 'blue');
    gradient.addColorStop(1, 'white');

    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);

    const texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;

    const geometry = new THREE.SphereGeometry(500, 32, 32);
    const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide });

    const skySphere = new THREE.Mesh(geometry, material);

    skySphere.material.depthWrite = false;
    scene.add(skySphere);
}