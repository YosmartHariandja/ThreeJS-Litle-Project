let width = window.innerWidth;
let height = window.innerHeight;
let depth = 750;

function makeLight(x, y, z) {

    let light = new THREE.PointLight(0xffffff, 4, (new THREE.Vector3(x, y, z)).length());
    light.position.set(x, y, z);
    light.lookAt(0, 0, 0);
    scene.add(light);
}

makeLight(0, 0, depth*2);
makeLight(width, height, depth);
makeLight(width, -height, depth);
makeLight(-width, -height, depth);
makeLight(-width, height, depth);

makeLight(width, height, -depth);
makeLight(width, -height, -depth);
makeLight(-width, -height, -depth);
makeLight(-width, height, -depth);

let oceanTexture = new THREE.TextureLoader().load('/Boid Flocking/texture/empty-ocean.jpeg');
// Kalau error gunakan dibawah ini
// let oceanTexture = new THREE.TextureLoader().load('texture/empty-ocean.jpeg');

let planeGeo = new THREE.PlaneGeometry(window.innerWidth*1.1, window.innerHeight*1.1);
let planeMat = new THREE.MeshBasicMaterial({
    map:oceanTexture 
});
var boxMesh = new THREE.Mesh(planeGeo, planeMat);
scene.add(boxMesh);

let textTexture = new THREE.TextureLoader().load('/Boid Flocking/texture/Soal (1).png');
// Kalau error gunakan dibawah ini
// let textTexture = new THREE.TextureLoader().load('texture/Soal (1).png');

let planeGeoText = new THREE.Geometry();

planeGeoText.faces.push(
    new THREE.Face3(0, 1, 3),
    new THREE.Face3(1, 2, 3),
);

planeGeoText.vertices.push(
    new THREE.Vector3(-1, -1, 0),
    new THREE.Vector3(1, -1, 0),
    new THREE.Vector3(1, 1, 0),
    new THREE.Vector3(-1, 1, 0),
);

let planeGeoText2 = new THREE.PlaneGeometry(width,height/2,4,1);

let uv1 = [
    new THREE.Vector2(0.0,0.5),
    new THREE.Vector2(0.0,0.0),
    new THREE.Vector2(0.5,0.5),
];

let uv2 = [
    new THREE.Vector2(0.0, 0.0),
    new THREE.Vector2(0.5, 0.0),
    new THREE.Vector2(0.5, 0.5),
];

let uv3 = [
    new THREE.Vector2(0.5,1.0),
    new THREE.Vector2(0.5,0.5),
    new THREE.Vector2(1.0,1.0),
];

let uv4 = [
    new THREE.Vector2(0.5, 0.5),
    new THREE.Vector2(1.0, 0.5),
    new THREE.Vector2(1.0, 1.0),
];

let uv5 = [
    new THREE.Vector2(0.0,1.0),
    new THREE.Vector2(0.0,0.5),
    new THREE.Vector2(0.5,1.0),
];
let uv6 = [
    new THREE.Vector2(0.0, 0.5),
    new THREE.Vector2(0.5, 0.5),
    new THREE.Vector2(0.5, 1.0),
];

let uv7 = [
    new THREE.Vector2(0.5,0.5),
    new THREE.Vector2(0.5,0.0),
    new THREE.Vector2(1.0,0.5),
];

let uv8 = [
    new THREE.Vector2(0.5, 0.0),
    new THREE.Vector2(1.0, 0.0),
    new THREE.Vector2(1.0, 0.5),
];

planeGeoText2.faceVertexUvs[0] = [];
//Don't
planeGeoText2.faceVertexUvs[0].push(uv3);
planeGeoText2.faceVertexUvs[0].push(uv4);
//Open
planeGeoText2.faceVertexUvs[0].push(uv5);
planeGeoText2.faceVertexUvs[0].push(uv6);
//Dead
planeGeoText2.faceVertexUvs[0].push(uv7);
planeGeoText2.faceVertexUvs[0].push(uv8);
//Inside
planeGeoText2.faceVertexUvs[0].push(uv1);
planeGeoText2.faceVertexUvs[0].push(uv2);

let planeTextMat = new THREE.MeshBasicMaterial({
    map:textTexture,
});

let planeTextMesh = new THREE.Mesh(planeGeoText2, planeTextMat);
scene.add(planeTextMesh);

planeTextMesh.scale.x = 0.2;
planeTextMesh.scale.y = 0.2;

planeTextMesh.position.x = width/2.25;
planeTextMesh.position.y = -height/2.05;