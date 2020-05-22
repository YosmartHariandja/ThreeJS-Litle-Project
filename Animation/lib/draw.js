let i = 0;

let incOrDec = false;

let theta = 0;
let dTheta = 2 * Math.PI / 500;
let r = 5;

let t1 = gsap.timeline({paused:true});
t1.to(sphereCen.position, {x: 5, duration:1});
t1.to(sphereCen.position, {x: 0, duration:1});
t1.to(sphereCen.position, {x: -5, duration:1});
t1.to(sphereCen.position, {x: 0, duration:1});
t1.play();

function draw() {
    requestAnimationFrame(draw);

    theta += dTheta;

    gsap.to(sphere.position, 1, { x: i, y: i, z: i, duration: 0 });
    gsap.to(sphere2.position, 1, { x: -i, y: -i, z: i, duration: 0 });
    gsap.to(sphere3.position, 1, { x: -i, y: i, z: i, duration: 0 });
    gsap.to(sphere4.position, 1, { x: i, y: -i, z: i, duration: 0 });
    gsap.from(sphere5.position, 1, { x: r * Math.cos(theta), y: 0, z: r * Math.sin(theta), duration: 0 })
    gsap.from(sphere6.position, 1, { x: r * Math.cos(theta), y: r * Math.sin(theta), z: 0, duration: 0 })
    gsap.from(sphere7.position, 1, { x: 0, y: r * Math.sin(theta), z: r * Math.cos(theta), duration: 0 })

    if (!incOrDec)
        i++;
    if (incOrDec)
        i--;

    if (i == 10)
        incOrDec = true;
    if (i == -10)
        incOrDec = false;

    renderer.render(scene, cam);
}

draw();