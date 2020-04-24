const flock = [];

function setup() {
    for (let i = 0; i < 200; i++) {
        flock.push(new Boid(innerWidth, innerHeight, 0));
    }
}
setup();

function draw() {
    requestAnimationFrame(draw);
    for (let boid of flock) {
        boid.edges();
        boid.flock(flock);
        boid.show();
        boid.update();
    }

    renderer.render(scene, cam);
    cam.lookAt(0, 0, 0);
}
draw();