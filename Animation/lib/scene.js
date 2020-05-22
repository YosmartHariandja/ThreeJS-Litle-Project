let controls = new THREE.OrbitControls(cam, renderer.domElement);

let grid = new THREE.GridHelper(100, 20, 0x0a0a0a, 0x0a0a0a);
grid.position.y -= 2;
scene.add(grid);

let plight = new THREE.PointLight(0xFFFFFF, 1);
plight.position.set(1, 15, 15);
scene.add(plight);

let spGeo = new THREE.SphereGeometry(0.5, 32, 32);
let spMat = new THREE.MeshPhongMaterial({color:0xFF00FF});
let sphere = new THREE.Mesh(spGeo, spMat);
let sphere2 = new THREE.Mesh(spGeo, spMat);
let sphere3 = new THREE.Mesh(spGeo, spMat);
let sphere4 = new THREE.Mesh(spGeo, spMat);
let sphere5 = new THREE.Mesh(spGeo, spMat);
let sphere6 = new THREE.Mesh(spGeo, spMat);
let sphere7 = new THREE.Mesh(spGeo, spMat);
let sphereCen = new THREE.Mesh(spGeo, spMat);
scene.add(sphere);
scene.add(sphere2);
scene.add(sphere3);
scene.add(sphere4);
scene.add(sphere5);
scene.add(sphere6);
scene.add(sphere7);
scene.add(sphereCen);
