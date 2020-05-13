const flock = [];

function setup() {
    for (let i = 0; i < 300; i++) {
        flock.push(new Boid());
    }
}
setup();

function draw() {
    requestAnimationFrame(draw);
    for (let boid of flock) {
        boid.edges(width/2, height/2, depth/2);
        boid.flock(flock);
        boid.show();
        boid.update();
    }
    cam.lookAt(0, 0, 0);
    renderer.render( scene, cam );
}
draw();