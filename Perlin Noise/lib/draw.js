let inc = 0.01;

function draw() {

    while(scene.children.length > 0){ 
        scene.remove(scene.children[0]); 
    }

    let yoff = 0;
    for (let y = -20; y < 20; y += 0.25){
        let xoff = 0;
        for(let x = -20; x < 20; x += 0.25)
        {
            let dotGeometry = new THREE.Geometry();
            dotGeometry.vertices.push(new THREE.Vector3(x,y,0));
            let r = noise(xoff, yoff);
            let dotMaterial = new THREE.PointsMaterial({color:new THREE.Color(r, r, r)});
            let dot = new THREE.Points(dotGeometry, dotMaterial);
            scene.add(dot);
            xoff += inc;
        }
        yoff += inc;
    }
 
    renderer.render( scene, cam );
}