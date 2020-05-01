class Boid {
    constructor() {
        let multiPos = 100;
        let magnitude = 3.5;
        this.position = new THREE.Vector3(Math.random() * multiPos * 2 * (Math.random() < 0.5 ? -1 : 1), Math.random() * multiPos * (Math.random() < 0.5 ? -1 : 1), Math.random() * multiPos * (Math.random() < 0.5 ? -1 : 1));
        this.velocity = new THREE.Vector3(Math.random() * magnitude * (Math.random() < 0.5 ? -1 : 1), Math.random() * magnitude * (Math.random() < 0.5 ? -1 : 1), Math.random() * magnitude * (Math.random() < 0.5 ? -1 : 1));
        this.acceleration = new THREE.Vector3();
        this.maxForce = 0.1;
        this.maxSpeed = 5;
        
        this.multAcl = Math.random();
        this.multCoh = Math.random();
        this.multSep = Math.random();

        this.aRadius = 100;
        this.cRadius = 100;
        this.sRadius = 50;

        let boidGeo = new THREE.SphereGeometry(5, 20, 32);
        let mat = new THREE.MeshPhongMaterial({ color: 0x31c4a0});
        this.boid = new THREE.Mesh(boidGeo, mat);
    }

    flock(boids)
    {
        //Just Cohesion is cool effect
        let aligment = this.align(boids);
        let cohesion = this.cohesion(boids);
        let separation = this.separation(boids);

        aligment.multiplyScalar(this.multAcl);
        cohesion.multiplyScalar(this.multCoh);
        separation.multiplyScalar(this.multSep);
        
        this.acceleration.add(separation);
        this.acceleration.add(aligment);
        this.acceleration.add(cohesion);
    }

    align(boids) {
        let perceptionRadius = this.aRadius;
        let steering = new THREE.Vector3();
        let total = 0;
        for (let other of boids) {
            let d = this.position.distanceTo(other.position);
            if (other != this && d < perceptionRadius) {
                steering.add(other.velocity);
                total++;
            }
        }
        if (total > 0) {
            steering.divideScalar(total);
            steering.setLength(this.maxSpeed);
            steering.sub(this.velocity);
            steering.clampLength(0, this.maxForce);
        }
        return steering;
    }

    cohesion(boids) {
        let perceptionRadius = this.cRadius;
        let steering = new THREE.Vector3();
        let total = 0;
        for (let other of boids) {
            let d = this.position.distanceTo(other.position);
            if (other != this && d < perceptionRadius) {
                steering.add(other.position);
                total++;
            }
        }
        if (total > 0) {
            steering.divideScalar(total);
            steering.sub(this.position);
            steering.setLength(this.maxSpeed);
            steering.sub(this.velocity);
            steering.clampLength(0, this.maxForce);
        }
        return steering;
    }

    separation(boids) {
        let perceptionRadius = this.sRadius;
        let steering = new THREE.Vector3();
        let total = 0;
        for (let other of boids) {
            let d = this.position.distanceTo(other.position);
            if (other != this && d < perceptionRadius) {
                let diff = new THREE.Vector3();
                diff.subVectors(this.position, other.position);
                diff.divideScalar(d);
                steering.add(diff);
                total++;
            }
        }
        if (total > 0) {
            steering.divideScalar(total);
            steering.setLength(this.maxSpeed);
            steering.sub(this.velocity);
            steering.clampLength(0, this.maxForce);
        }
        return steering;
    }

    edges(width, height, depth)
    {
        if(this.position.x > width)
        {
            this.position.x = -width;
        } else if (this.position.x < -width)
        {
            this.position.x = width;
        }

        if(this.position.y > height)
        {
            this.position.y = -height;
        } else if (this.position.y < -height)
        {
            this.position.y = height;
        }

        if(this.position.z > depth)
        {
            this.position.z = -depth;
        } else if (this.position.z < -depth)
        {
            this.position.z = depth;
        }
    }

    update() {
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        this.velocity.clampLength(0, this.maxSpeed);
        this.acceleration.multiplyScalar(0);
    }

    show() {
        this.boid.position.x = this.position.x;
        this.boid.position.y = this.position.y;
        this.boid.position.z = this.position.z;
        scene.add(this.boid);
    }
}