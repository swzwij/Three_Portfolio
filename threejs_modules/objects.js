import * as THREE from 'three';

export function addCube(scene) 
{
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x0059e8 });
    material.receiveShadow = true;

    const cube = new THREE.Mesh(geometry, material);

    cube.rotation.y = 45 * (Math.PI / 180);
    cube.position.y = 0.5;

    cube.castShadow = true;
    cube.receiveShadow = true;

    scene.add(cube);
    
    return cube;
}

export function addPlane(scene) {
    const geometry = new THREE.PlaneGeometry(10, 10);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const plane = new THREE.Mesh(geometry, material);

    plane.rotation.x = -Math.PI / 2;
    plane.position.y = 0;

    plane.receiveShadow = true;

    scene.add(plane);
}
