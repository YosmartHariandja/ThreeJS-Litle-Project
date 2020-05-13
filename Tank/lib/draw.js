let keyboard = [];

document.body.onkeydown = function(evt)
{
    keyboard[evt.key] = true;
}

document.body.onkeyup = function(evt)
{
    keyboard[evt.key] = false;
}

var tank = new Tank();
function draw() {
    requestAnimationFrame(draw);
    controls.update();
    tank.process_keyboard(keyboard);
    tank.show();
    tank.update();
    renderer.render( scene, cam );
}
draw();