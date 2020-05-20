class Walker{
    constructor(x, y, mesh)
    {
        this.pos = new THREE.Vector3(x, y, 0);
    }

    update()
    {
        let randDir = Math.floor(Math.random() * 4);

        switch(randDir)
        {
            case 0:
                this.pos.x += 1;
                break;
            case 1:
                this.pos.x -= 1;
                break;
            case 2:
                this.pos.y += 1;
                break;
            case 3:
                this.pos.y -= 1;
                break;
            default:
                break;
        }
    }
    show()
    {
        let dotGeo = new THREE.Geometry();
        dotGeo.vertices.push(new THREE.Vector3(0,0,0));
        let dotMaterial = new THREE.PointsMaterial();
        let dot = new THREE.Points(dotGeo, dotMaterial);
        
        dot.position.x = this.pos.x;
        dot.position.y = this.pos.y;
        
        scene.add(dot);
    }
}