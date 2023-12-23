import { addPointLight, addSceneLight, addSpotLight } from './light.js';
import { addCube, addFBX, addPlane } from './objects.js';

export function addSceneObjects(scene) 
{
    addPlane(scene, 100);

    addFBX(scene, 'models/arcade_machine.fbx', { x: -3, y: 0, z: -1.5 }, 0.01, { x: 0, y: 0, z: 0 }, 0x0059e8);
    addFBX(scene, 'models/arcade_machine.fbx', { x: -3, y: 0, z: 1.5 }, 0.01, { x: 0, y: 0, z: 0 }, 0x0059e8);
    
    addFBX(scene, 'models/arcade_machine.fbx', { x: 1.5, y: 0, z: -3 }, 0.01, { x: 0, y: 270, z: 0 }, 0x0059e8);
    
    addFBX(scene, 'models/frame.fbx', { x: -4.5, y: 5.7, z: 0 }, 0.0075, { x: 0, y: 270, z: 0 }, 0x0059e8);
    addFBX(scene, 'models/frame.fbx', { x: -4.5, y: 6.2, z: 2 }, 0.0075, { x: 0, y: 270, z: 0 }, 0x0059e8);
    addFBX(scene, 'models/frame.fbx', { x: -4.5, y: 5.8, z: 4 }, 0.0075, { x: 0, y: 270, z: 0 }, 0x0059e8);
    addFBX(scene, 'models/frame.fbx', { x: -4.5, y: 6, z: -2.5 }, 0.0075, { x: 0, y: 270, z: 0 }, 0x0059e8);
    
    addFBX(scene, 'models/frame.fbx', { x: -3.5, y: 6, z: -4.5 }, 0.0075, { x: 0, y: 180, z: 0 }, 0x0059e8);
    addFBX(scene, 'models/frame.fbx', { x: -1.7, y: 6.3, z: -4.5 }, 0.0075, { x: 0, y: 180, z: 0 }, 0x0059e8);
    addFBX(scene, 'models/frame.fbx', { x: 0.2, y: 5.7, z: -4.5 }, 0.0075, { x: 0, y: 180, z: 0 }, 0x0059e8);
    addFBX(scene, 'models/frame.fbx', { x: 2.5, y: 6.1, z: -4.5 }, 0.0075, { x: 0, y: 180, z: 0 }, 0x0059e8);
    
    addFBX(scene, 'models/room.fbx', { x: 0, y: 0, z: 0 }, 0.01, { x: 0, y: 0, z: 0 });
    
    addPointLight(scene, { x: -2.5, y: 2.5, z: -1.5 }, 0xff0000, 1);
    addPointLight(scene, { x: -2.5, y: 2.5, z: 1.5 }, 0x00ff00, 1);
    addPointLight(scene, { x: 1.5, y: 2.5, z: -2.5 }, 0x0000ff, 1);
    
    addSpotLight(scene, { x: 0, y: 10, z: 0 }, 0xf7e9be, 10);
}

export function addSceneTest(scene)
{
    addPlane(scene, 25);
    addCube(scene, { x: -1, y: 0.5, z: 0 }, { x: 0, y: 0, z: 0 });
    addCube(scene, { x: -2.5, y: 2.5, z: 0.5 }, { x: 0, y: 0, z: 0 });
    addFBX(scene, 'models/default_cube.fbx', { x: -3, y: 1, z: 0 }, 0.01, { x: 0, y: 0, z: 0 });
    
    addCube(scene, { x: 3, y: 0.5, z: 0 }, { x: 0, y: 0, z: 0 });
    addCube(scene, { x: 4, y: 0.5, z: 1 }, { x: 0, y: 0, z: 0 });
}