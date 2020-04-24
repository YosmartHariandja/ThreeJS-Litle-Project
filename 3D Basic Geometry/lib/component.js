let scene = new THREE.Scene();
let cam = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 1000);
let renderer = new THREE.WebGLRenderer();

cam.position.z += 20;
// cam.position.x += 10;
// cam.position.y -= 10;
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

window.addEventListener("resize", function(){
    renderer.setSize(this.window.innerWidth, this.window.innerHeight);
    cam.aspect = this.window.innerWidth/this.innerHeight;
    cam.updateProjectionMatrix();
});