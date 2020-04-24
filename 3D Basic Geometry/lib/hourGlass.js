var hourglassGeo = new THREE.Geometry();
hourglassGeo.vertices.push(
    //Front Point Respectively (Left Down, Right Down, Right Up, Left Up)
    new THREE.Vector3(-1, -1, 2),
    new THREE.Vector3(1, -1, 2),
    new THREE.Vector3(1, 1, 2),
    new THREE.Vector3(-1, 1, 2),

    //Back Point Respectively (Left Down, Right Down, Right Up, Left Up)
    new THREE.Vector3(-1, -1, -2),
    new THREE.Vector3(1, -1, -2),
    new THREE.Vector3(1, 1, -2),
    new THREE.Vector3(-1, 1, -2),

    //Middle Point
    new THREE.Vector3(0, 0, 0),
    //Front End Point
    new THREE.Vector3(0, 0, 3),
    //Back End Point
    new THREE.Vector3(0, 0, -3),
);

hourglassGeo.faces.push(
    //From half right to midle
    new THREE.Face3(3,8,0),
    new THREE.Face3(0,8,1),
    new THREE.Face3(1,8,2),
    new THREE.Face3(2,8,3),

    //From half left to midle
    new THREE.Face3(5,8,4),
    new THREE.Face3(6,8,5),
    new THREE.Face3(7,8,6),
    new THREE.Face3(4,8,7),

    //From half right to end
    new THREE.Face3(1,9,0),
    new THREE.Face3(2,9,1),
    new THREE.Face3(3,9,2),
    new THREE.Face3(0,9,3),

    //From half left to end
    new THREE.Face3(4,10,5),
    new THREE.Face3(5,10,6),
    new THREE.Face3(6,10,7),
    new THREE.Face3(7,10,4),
);

for (var i = 0; i < hourglassGeo.faces.length; i++ ) {
    hourglassGeo.faces[i].color.setHex( Math.random() * 0xffffff );
}

var matHour = new THREE.MeshBasicMaterial({vertexColors:true});
var hourglassMesh = new THREE.Mesh(hourglassGeo, matHour);