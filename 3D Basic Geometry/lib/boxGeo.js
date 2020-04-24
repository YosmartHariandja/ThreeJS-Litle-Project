var boxGeo = new THREE.Geometry();
boxGeo.vertices.push(
    new THREE.Vector3(-1,-1,1),
    new THREE.Vector3(1,-1,1),
    new THREE.Vector3(1,1,1),
    new THREE.Vector3(-1,1,1),

    new THREE.Vector3(-1,-1,-1),
    new THREE.Vector3(1,-1,-1),
    new THREE.Vector3(1,1,-1),
    new THREE.Vector3(-1,1,-1),
);

boxGeo.faces.push(
    new THREE.Face3(2,3,0),
    new THREE.Face3(0,1,2),

    new THREE.Face3(0,3,4),
    new THREE.Face3(4,3,7),

    new THREE.Face3(7,6,5),
    new THREE.Face3(5,4,7),

    new THREE.Face3(1,5,2),
    new THREE.Face3(5,6,2),

    new THREE.Face3(3,2,7),
    new THREE.Face3(2,6,7),

    new THREE.Face3(0,4,5),
    new THREE.Face3(5,1,0),
);


for ( var i = 0; i < boxGeo.faces.length; i++ ) {
    boxGeo.faces[i].color.setHex( Math.random() * 0xffffff );
}

var mat = new THREE.MeshBasicMaterial({vertexColors:true});
var boxMesh = new THREE.Mesh(boxGeo, mat);