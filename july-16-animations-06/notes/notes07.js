// PerspectiveCamera parameters

    // first parameter
        // field of view    
            // vertical vision angle
            // in degrees
            // recommend 45 to 75

    // second parameter
        // aspect ration
            // the width of the render divided by the height
    
    // third and fourth parameters
        // near and far
            // corresponds to how close and how far the camera can see
            // any object or part of the object closer than near or further than far will not show up

        
// Orthographic Camera

    // differs bc it lacks perspective
    // object has the same size egardless of their distance from the camera
    // instead of field of view, we provide how far the camera can see in each direction (left, right, top and bottom)
    // then the near and far
    // use aspect in horizontal parameters so that your cube doesn't look flat
    const camera = new THREE.OrthographicCamera(- aspectRatio, aspectRatio, 1, -1, 0.1, 100)