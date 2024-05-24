import * as THREE from "three";

import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

let container, camera, scene, renderer;

init();
render();

function init() {
	container = document.getElementById('map-3d');

	camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
	// camera.position.set(100, 60, 100);
	camera.position.set(0, 90, 0);

	scene = new THREE.Scene();
	scene.background = new THREE.Color(0xf6eedc);

	const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
	scene.add(ambientLight);
	
	const dirLight = new THREE.DirectionalLight(0xefefff, 1.5);
	dirLight.position.set(10, 10, 10);
	scene.add(dirLight);

	// 점들의 리스트 정의
        const points = [
            new THREE.Vector3(1, 2, 3),
            new THREE.Vector3(4, 5, 6),
            new THREE.Vector3(7, 8, 9),
            new THREE.Vector3(10, 11, 12)
        ];

        // 선 색깔 설정
        const material = new THREE.LineBasicMaterial({ color: 0xff0000 }); // 붉은색

        // 점들을 순서대로 이은 mesh 생성
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geometry, material);

        // 씬에 선 추가
        scene.add(line);

	const loader = new GLTFLoader();
	loader.load("../map.glb", function (gltf) {
		gltf.scene.rotation.y = -0.6
		scene.add(gltf.scene);
		render();
	});

	renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(container.clientWidth, container.clientHeight);
	container.appendChild(renderer.domElement);

	const controls = new OrbitControls(camera, renderer.domElement);
	controls.addEventListener("change", render);
	controls.target.set(0, 2, 0);
	controls.update();

	window.addEventListener("resize", onWindowResize);
}

function onWindowResize() {
	camera.aspect = container.clientWidth / container.clientHeight;
	camera.updateProjectionMatrix();

	renderer.setSize(container.clientWidth, container.clientHeight);
	render();
}

function render() {
	renderer.render(scene, camera);
}
