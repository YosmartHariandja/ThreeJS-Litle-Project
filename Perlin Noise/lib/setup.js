function makeSphere()
{
    let sphereGeo = new THREE.SphereGeometry(2, 32, 32);
    let sphereMat = new THREE.MeshBasicMaterial(0xFFFFFF);
    let sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
    
    return sphereMesh;
}