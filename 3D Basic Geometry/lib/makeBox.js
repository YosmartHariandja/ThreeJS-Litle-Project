function makeBoxGeo(length, height, width)
{
    let makeBox = new THREE.Geometry();
    makeBox.vertices.push(
        new THREE.Vector3(-length/2, -height/2, width/2),
        new THREE.Vector3(length/2, -height/2, width/2),
        new THREE.Vector3(length/2, height/2, width/2),
        new THREE.Vector3(-length/2, height/2, width/2),

        new THREE.Vector3(-length/2, -height/2, -width/2),
        new THREE.Vector3(length/2, -height/2, -width/2),
        new THREE.Vector3(length/2, height/2, -width/2),
        new THREE.Vector3(-length/2, height/2, -width/2),
    );
    
    makeBox.faces.push(
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

    for ( let i = 0; i < makeBox.faces.length; i++ ) {
        makeBox.faces[i].color.setHex( Math.random() * 0xffffff );
    }
    
    let costumMat = new THREE.MeshBasicMaterial({vertexColors:true});
    let costumBoxMesh = new THREE.Mesh(makeBox, costumMat);

    return costumBoxMesh;
}