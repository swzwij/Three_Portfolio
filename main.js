import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

let camera, scene, renderer;
let cube;
let controls;

function init() 
{
    scene = new THREE.Scene();

    setupCamera();
    setupRenderer();
    
    addLight();

    addCube();
    addPlane();

    setupControls();

    animate();
}

function setupCamera() 
{
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(5, 3, 5);
}

function setupRenderer() 
{
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    document.body.appendChild(renderer.domElement);
}

function setupControls()
{
    controls = new OrbitControls(camera, renderer.domElement);
    controls.target.copy(cube.position);

    window.addEventListener('resize', () => 
    {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });
}

function addLight() 
{
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 5, 10);
    light.castShadow = true;

    light.shadow.mapSize.width = 1024; 
    light.shadow.mapSize.height = 1024;

    light.shadow.camera.near = 0.5;
    light.shadow.camera.far = 50;

    scene.add(light);
}

function addPlane() 
{
    const geometry = new THREE.PlaneGeometry(10, 10);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const plane = new THREE.Mesh(geometry, material);

    plane.rotation.x = -Math.PI / 2;
    plane.position.y = 0;

    plane.receiveShadow = true;

    scene.add(plane);
}

function addCube() 
{
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x0059e8 });
    material.receiveShadow = true;

    cube = new THREE.Mesh(geometry, material);

    cube.rotation.y = 45 * (Math.PI / 180);
    cube.position.y = 0.5;

    cube.castShadow = true;
    cube.receiveShadow = true;

    scene.add(cube);
}

function animate() 
{
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

export { init };