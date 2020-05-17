function randomWalker(vector)
{
    let vectorNew = vector;
    let randDir = Math.floor(Math.random() * 4);
    let dotGeo = new THREE.Geometry();
    dotGeo.vertices.push(new THREE.Vector3(0,0,0));
    let dotMaterial = new THREE.PointsMaterial();
    let dot = new THREE.Points(dotGeo, dotMaterial);
    dot.position.x = vector.x;
    dot.position.y = vector.y;
    scene.add(dot);
    switch(randDir)
    {
        case 0:
            vectorNew.x += 1;
            break;
        case 1:
            vectorNew.x -= 1;
            break;
        case 2:
            vectorNew.y += 1;
            break;
        case 3:
            vectorNew.y -= 1;
            break;
        default:
            break;
    }

    return vectorNew;
}

let start = new THREE.Vector3();

function draw() {
    requestAnimationFrame(draw);

    start = randomWalker(start);

    renderer.render( scene, cam );
}
draw();