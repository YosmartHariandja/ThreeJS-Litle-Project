let fluid = new Fluid(0.1, 0, 0);
function draw() {
    requestAnimationFrame(draw);

    fluid.step();
    fluid.renderD();
    renderer.render( scene, cam );
}
draw();