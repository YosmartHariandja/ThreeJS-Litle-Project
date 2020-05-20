
let start = new THREE.Vector3();
let walker = new Walker(start.x, start.y);

function draw() {
    requestAnimationFrame(draw);

    walker.show();
    walker.update();

    renderer.render( scene, cam );
}
draw();