//console.log(THREE); // write THREE variable in capital letters; this logs an object contain almost all the three.js classes

// first scene
    // 4 elements to get started
        // a scene that will contain objects
        // some objects
        // a camera
        // a renderer
// scene
    // like a container
    // we put objects, models, lights, etc, in it
    // at some point we ask Three.js to render that scene

const scene = new THREE.Scene(); // create scene ("scene" is just the variable name)

//objects
    // can be many things
        // primitive geometries
        // imported models
        // particles
        // lights
        // etc.
    
// start with a simple red cube
// we need to create a Mesh
    // combination of a geometry (the shape) and a material (how it looks)
    // start with a BoxGeometry and a MeshBasicMaterial

// red cube
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({ color: 'red' });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// camera
    // not visible
    // serve as point of view when doing a render
    // can have multiple and switch between them
    // different types
    // we are going to use PerspectiveCamera

// the field of view
    // vertical vision angle
    // in degrees
    // also called fov
    // for this exercise we will use a 75 degree angle

    
// the aspect ratio
    // the width of the render divided by the height of the render
    // we don't have a render yet, but we can decide on a size now
    // create a sizes object containing temporary values

const sizes = {
    width: 800,
    height: 600
};

// camera
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height); // pass in fov in degrees
camera.position.z = 5; // move camera back so that we can see the cube
camera.position.x = 2;
camera.position.y = 2;
scene.add(camera);

// renderer
    // render the scene from the camera point of view
    // result drawn into a canvas
    // a canvas is an HTML element in which you can draw stuff
    // Three.js will use WebGL to draw the render inside this canvas 
    // You can create it or you can let Three.js do it

// Renderer
const canvas = document.querySelector('.webgl');
console.log(canvas);
const renderer = new THREE.WebGLRenderer({
    canvas: canvas // if the property is the same as the variable name you can write just the variable, like..
    // canvas
});
renderer.setSize(sizes.width, sizes.height);



// first render
renderer.render(scene, camera) // right now you won't see anything since we have the cube and camera at the exact same position, the center

// to transform an object, we can use the following properties:
    // position
    // rotation
    // scale

// the position property is also an object with x, y, and z properties Three.js considers the forward/backward axis to be z



