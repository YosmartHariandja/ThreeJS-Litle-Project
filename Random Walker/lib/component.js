let scene = new THREE.Scene();
let cam = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
let renderer = new THREE.WebGLRenderer({antialias: true});
scene.background = new THREE.Color(0x064273);

cam.position.z += 100;
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

window.addEventListener("resize", function () {
    renderer.setSize(this.window.innerWidth, this.window.innerHeight);
    cam.aspect = this.window.innerWidth / this.innerHeight;
    cam.updateProjectionMatrix();
});

renderer.setClearColor( 0x20252f );
renderer.setPixelRatio( window.devicePixelRatio );

