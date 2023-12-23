import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

let camera, scene, renderer;
let geometry, material, cube;
let controls;

function init() 
{
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    geometry = new THREE.BoxGeometry();
    material = new THREE.MeshBasicMaterial({ color: 0x0059e8 });
    cube = new THREE.Mesh(geometry, material);
    
    scene.add(cube);
    
    camera.position.z = 5;
    
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