import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

let camera, scene, renderer, light;
let geometry, material, cube;
let controls;

function init() 
{
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    camera.position.set(5, 3, 5);
    
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    document.body.appendChild(renderer.domElement);
    
    light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 5, 10);
    light.castShadow = true;

    light.shadow.mapSize.width = 1024; 
    light.shadow.mapSize.height = 1024;

    light.shadow.camera.near = 0.5;
    light.shadow.camera.far = 50;

    scene.add(light);

    geometry = new THREE.BoxGeometry();
    material = new THREE.MeshBasicMaterial({ color: 0x0059e8 });
    material.receiveShadow = true;
    cube = new THREE.Mesh(geometry, material);
    cube.rotation.y = 45 * (Math.PI / 180);
    cube.position.y = 0.5;
    cube.castShadow = true;
    cube.receiveShadow = true;

    scene.add(cube);

    const planeGeometry = new THREE.PlaneGeometry(10, 10); // Size of the plane
    const planeMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff }); // Material and color of the plane
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);

    plane.rotation.x = -Math.PI / 2;
    plane.position.y = 0;

    plane.receiveShadow = true;

    scene.add(plane);
    
    controls = new OrbitControls(camera, renderer.domElement);
    controls.target.copy(cube.position);
    
    window.addEventListener('resize', () => 
    {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });

    animate();
}

function animate() 
{
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

export { init };