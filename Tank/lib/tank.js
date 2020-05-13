class Tank {
    constructor() {
        this.position = new THREE.Vector3();
        this.velocity = new THREE.Vector3();
        this.rotation = 0.1;

        let geoSphere = new THREE.SphereGeometry(5, 32, 32);
        let matSphere = new THREE.MeshToonMaterial({ color: 0x2194CE });
        let meshSphere = new THREE.Mesh(geoSphere, matSphere);

        let geoBox = new THREE.BoxGeometry(10, 8, 10);
        let matBox = new THREE.MeshToonMaterial({ color: 0x2194CE });
        let meshBox = new THREE.Mesh(geoBox, matBox);
        meshBox.position.y -= 5;

        let geoGun = new THREE.BoxGeometry(2, 6, 2);
        let matGun = new THREE.MeshToonMaterial({ color: 0x2194CE });
        let meshGun = new THREE.Mesh(geoGun, matGun);
        meshGun.position.y += 5;
        meshGun.position.z -= 4;
        meshGun.rotation.x -= 7.5;

        this.groupGun = new THREE.Group();
        this.groupGun.add(meshSphere);
        this.groupGun.add(meshGun);

        this.groupTank = new THREE.Group();
        this.groupTank.add(meshBox);
    }

    process_keyboard(keyboard) {
        if (keyboard['a']) {
            this.velocity.add(new THREE.Vector3(-1, 0, 0))
        }
        if (keyboard['d']) {
            this.velocity.add(new THREE.Vector3(1, 0, 0))
        }
        if (keyboard['w']) {
            this.velocity.add(new THREE.Vector3(0, 0, -1))
        }
        if (keyboard['s']) {
            this.velocity.add(new THREE.Vector3(0, 0, 1))
        }
        if (keyboard['q']) {
            this.groupGun.rotation.y += this.rotation;
        }
        if (keyboard['e']) {
            this.groupGun.rotation.y -= this.rotation;
        }
    }

    update() {
        this.position.add(this.velocity);
        this.velocity.clampLength(0, 0);
    }

    show() {
        this.groupGun.position.x = this.position.x;
        this.groupGun.position.y = this.position.y;
        this.groupGun.position.z = this.position.z;

        this.groupTank.position.x = this.position.x;
        this.groupTank.position.y = this.position.y;
        this.groupTank.position.z = this.position.z;

        scene.add(this.groupTank);
        scene.add(this.groupGun);
    }
}