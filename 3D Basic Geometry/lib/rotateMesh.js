function rotateMesh(r, mesh, onY, activeCos, activeSin, activeTan)
{
    mesh.position.x = r * Math.cos(theta);
    if(onY)
    {
        mesh.position.y = r * Math.cos(theta * 2) * Math.sin(theta);
        mesh.rotation.x += 0.07;
    }
    else
    {
        mesh.position.z = r * Math.sin(theta);
        mesh.rotation.x += 0.01;
    }
}