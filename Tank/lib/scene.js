let light = new THREE.DirectionalLight(0xffffff);
light.position.set(5, 5, 5);
scene.add(light);

let light2 = new THREE.DirectionalLight(0x002288);
light2.position.set(- 5, - 5, - 5);
scene.add(light2);

let light3 = new THREE.AmbientLight(0x222222);
scene.add(light3);
