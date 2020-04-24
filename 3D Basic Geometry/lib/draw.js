let boxCostumMesh = makeBoxGeo(0.2, 0.2, 0.2);

let orbitBox1 = makeBoxGeo(0.2, 0.2, 0.2);
let orbitBox2 = makeBoxGeo(0.2, 0.2, 0.2);
let orbitBox3 = makeBoxGeo(0.2, 0.2, 0.2);
let orbitBox4 = makeBoxGeo(0.2, 0.2, 0.2);

let theta = 0;
let dTheta = 2 * Math.PI / 500;

scene.add(boxCostumMesh, boxMesh, hourglassMesh, orbitBox1, orbitBox2, orbitBox3, orbitBox4);

function draw(){
    requestAnimationFrame(draw);
    hourglassMesh.rotation.x += 0.01;
    boxCostumMesh.rotation.x += 0.01;
    boxMesh.rotation.y += 0.01;

    theta += dTheta;

    rotateMesh(-8, boxMesh, false);
    rotateMesh(-4, orbitBox1, false);
    rotateMesh(4, orbitBox2, false);
    rotateMesh(-6, orbitBox3, true, 1, 1,0);
    rotateMesh(6, orbitBox4, true, 1, 1,0);
    
    renderer.render(scene, cam);
    cam.lookAt(0,0,0);
}

draw();