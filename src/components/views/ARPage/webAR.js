import * as THREE from "../../../capstone_AR/build/three.module.js";
import { ARButton } from "../../../capstone_AR/jsm/webxr/ARButton.js";
import { OrbitControls } from "../../../capstone_AR/jsm/controls/OrbitControls.js";
import { withRouter } from "react-router";
import { useLocation } from "react-router-dom";
// import { GLTFLoader } from './jsm/loaders/GLTFLoader.js';
// import { RGBELoader } from './jsm/loaders/RGBELoader.js';
// import { RoughnessMipmapper } from './jsm/utils/RoughnessMipmapper.js';

document.write(<head>
		<title>FlowerSpace</title>
		<meta charset="utf-8"></meta>
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"></meta>
		<link type="text/css" rel="stylesheet" href="main.css"></link>
		<link rel="shortcut icon" href="#"></link>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	</head>);

// 	<head>
// 		<!-- AR.js  THREEx -->
// 		<!-- <script src="https://cdn.jsdelivr.net/gh/aframevr/aframe@1c2407b26c61958baa93967b5412487cd94b290b/dist/aframe-master.min.js"></script> -->
// 		<!-- <script src="https://raw.githack.com/AR-js-org/AR.js/3.3.3/aframe/build/aframe-ar-nft.js"></script>   -->		
// 	</head>

/*
document.write(<body>
			<div id="content">
				<div id="mySidenav" class="sidenav">
					<div id="flower-list">
						<a href="javascript:void(0)" class="closebtn" onclick={closeNav}>&times;</a>
					</div>
						<a class="plant-obj" id="1" ><img src="2d/아이라이너 장미.jpg" width="90px" height="120px"></img></a>
						<a class="plant-obj" id="1" ><img src="2d/아이라이너 장미.jpg" width="90px" height="120px"></img></a>
						<a class="plant-obj" id="1" ><img src="2d/아이라이너 장미.jpg" width="90px" height="120px"></img></a>
				</div>
		
				<div id="container" style="position: fixed;"></div>
				
				<span style="font-size:30px;cursor:pointer;position: absolute;" onclick={openNav}>&#9776; open</span>
			
				<button type="button" id="place-button">PLACE</button>
			</div>
	</body>);
*/

function webAR({location}) {

	//const location = useLocation();
    const plantList = location.state.plant_list;

	//plant_list.forEach((item) => console.log(item.name))
	const plant_list = plantList.map((plant) => (<a key={plant.id} class="plant-obj" onclick={() => plantObjectClick()} name={plant.name} id={plant.id} src={plant.image}><img src={plant.image} width="90px" height="120px"><p>{plant.name}</p></img></a>))

	function openNav() {
		document.getElementById("mySidenav").style.width = "130px";
	}
	
	function closeNav() {
		document.getElementById("mySidenav").style.width = "0";
	}
			
	// 필요한 변수들
	var container;
	var camera, scene, renderer;
	// var controller;  // CONTROLS

	var reticle, pmremGenerator, current_object, controls;
	var envmap, isAR;

	var hitTestSource = null;
	var hitTestSourceRequested = false;

	var touchDown, touchX, touchY, deltaX, deltaY;

	var arButton;

	init();
	animate();

	/* 꽃 사진 선택하면 띄워줘야 함 -> 수정 완료 */
	// $(".plant-obj").click(
	function plantObjectClick() {
		if(current_object != null){
			scene.remove(current_object);
		}

		loadModel($(this).attr("src"));  // src=plant.image / this 는 click 된 애를 말하는건가!?
	
	};

	/* AR Button 
	$("#ARButton").click(function(){
		current_object.visible = false;
		isAR = true;
	});
	*/
	arButton.click = function() {
		current_object.visible = false;
		isAR = true;
	};

	/* 꽃 사진 place 하는 버튼 -> 수정 완료 */
	function arPlace(){
		if ( reticle.visible ) {
			current_object.position.setFromMatrixPosition(reticle.matrix);
			current_object.visible = true;
		}
	}
	/*  */

	/* Rendering 2D image on transparent 3D Object */
	function loadModel(plant_img){

		var geometry;
		
		var loader = new THREE.TextureLoader();

		loader.load(plant_img, ( texture ) => {  // change './2d/아이라이너\ 장미.jpg' to model (plant_img.image url) 
			// 꽃 이미지를 붙일 box geometry
			// geometry = new THREE.BoxGeometry(texture.image.width, texture.image.height, texture.image.width);
			geometry = new THREE.BoxGeometry(0.15, 0.2, 0.15);

			const material = new THREE.MeshBasicMaterial({
				map: texture,
			});
			//
			envmap = pmremGenerator.fromEquirectangular(texture).texture;

			scene.environment = envmap;
			texture.dispose();
			pmremGenerator.dispose();
			render();
			//
			
			current_object = new THREE.Mesh(geometry, material);
			scene.add(current_object);

			arPlace();

			var box = new THREE.Box3();
			box.setFromObject(current_object);
			box.getCenter(controls.target);

			controls.update();
			render();
		});
	}


	function init() {

		container = document.createElement( 'div' );
		document.getElementById("container").appendChild( container );

		scene = new THREE.Scene();
		window.scene = scene;

		// camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.001, 200 );
		camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 100 );

		/* change the light setting */
		var directionalLight = new THREE.DirectionalLight(0xdddddd, 1);
		directionalLight.position.set(0, 0, 1).normalize();
		directionalLight.castShadow = true
		scene.add(directionalLight);

		var ambientLight = new THREE.AmbientLight(0x222222);
		scene.add(ambientLight);

		renderer = new THREE.WebGLRenderer( { 
			antialias: true, 
			alpha: true 
		});
		renderer.setClearColor(new THREE.Color('lightgrey'), 0)
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );
		renderer.xr.enabled = true;
		renderer.shadowMap.enabled = true;
		// renderer.shadowMapSoft = true;

		container.appendChild( renderer.domElement );
		document.body.appendChild( renderer.domElement ); 

		/*  */
		pmremGenerator = new THREE.PMREMGenerator(renderer);
		pmremGenerator.compileEquirectangularShader();

		controls = new OrbitControls(camera, renderer.domElement);
		controls.addEventListener('change', render);
		controls.minDistance = 1;
		controls.maxDistance = 4;
		controls.target.set(0, 0, -0.2);
		controls.enableDamping = true;  // 부드러운 애니메이션

		//AR SETUP

		let options = {
			requiredFeatures: ['hit-test'],
			optionalFeatures: ['dom-overlay'],  // , 'dom-overlay-for-handheld-ar'
			domOverlay: { root: document.body }  // root: document.body -> 이렇게 넣어야 카메라 켜도 STOP AR 버튼이 생김
		}

		arButton = ARButton.createButton(renderer, options);
		
		document.body.appendChild( arButton );

		reticle = new THREE.Mesh(
			new THREE.RingBufferGeometry( 0.15, 0.2, 32 ).rotateX( - Math.PI / 2 ),  // hit-test 할 때 object 를 위치시킬 ring
			new THREE.MeshBasicMaterial()
		);
		reticle.matrixAutoUpdate = false;
		reticle.visible = false;
		scene.add( reticle );

		//

		window.addEventListener( 'resize', onWindowResize, false );

		renderer.domElement.addEventListener('touchstart', function(e){
			e.preventDefault();
			touchDown=true;
			touchX = e.touches[0].pageX;
			touchY = e.touches[0].pageY;
		}, false);

		renderer.domElement.addEventListener('touchend', function(e){
			e.preventDefault();
			touchDown = false;
		}, false);

		renderer.domElement.addEventListener('touchmove', function(e){
			e.preventDefault();
			
			if(!touchDown){
				return;
			}

			deltaX = e.touches[0].pageX - touchX;
			deltaY = e.touches[0].pageY - touchY;
			touchX = e.touches[0].pageX;
			touchY = e.touches[0].pageY;

			rotateObject();

		}, false);

	}

	function rotateObject(){
		if(current_object && reticle.visible){
			current_object.rotation.y += deltaX / 100;
		}
	}

	function onWindowResize() {

		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize( window.innerWidth, window.innerHeight );
	}

	//
	function animate() {

		renderer.setAnimationLoop( render );
		requestAnimationFrame(animate);  // recursive
		controls.update();  // 각 프레임 마다 update
	}

	/* frame is a Web XR API frame property */
	function render( timestamp, frame ) {

		if ( frame && isAR ) {

			var referenceSpace = renderer.xr.getReferenceSpace();
			var session = renderer.xr.getSession();

			// requestHitTestSource()
			if ( hitTestSourceRequested === false ) {

				session.requestReferenceSpace( 'viewer' ).then( function ( referenceSpace ) {

					session.requestHitTestSource( { space: referenceSpace } ).then( function ( source ) {

						hitTestSource = source;

					} );

				} );

				session.addEventListener( 'end', function () {

					hitTestSourceRequested = false;
					hitTestSource = null;
					referenceSpace = null;

					isAR = false;

					reticle.visible = false;

					var box = new THREE.Box3();
					box.setFromObject(current_object);
					box.getCenter(controls.target);

					document.getElementById("place-button").style.display = "none";

				} );

				hitTestSourceRequested = true;

			}

			// getHitTestResults( frame )
			if ( hitTestSource ) {

				var hitTestResults = frame.getHitTestResults( hitTestSource );

				if ( hitTestResults.length ) {

					const referenceSpace = renderer.xr.getReferenceSpace();
					const hit = hitTestResults[ 0 ];

					document.getElementById("place-button").style.display = "block";

					reticle.visible = true;
					reticle.matrix.fromArray( hit.getPose( referenceSpace ).transform.matrix );

				} else {

					reticle.visible = false;
					document.getElementById("place-button").style.display = "none";

				}
			}
		}

		renderer.render( scene, camera );

	}

	return (

		<body>
		<div id="content">
			<div id="mySidenav" class="sidenav">
				<div id="flower-list">
					<a href="javascript:void(0)" class="closebtn" onclick={closeNav}>&times;</a>
				</div>
					{plant_list}
			</div>
	
			<div id="container" style="position: fixed;"></div>
			
			<span style="font-size:30px;cursor:pointer;position: absolute;" onclick={openNav}>&#9776; open</span>
		
			<button type="button" id="place-button" onclick={arPlace} >PLACE</button>
		</div>
		</body>
		

	);

}

export default withRouter(webAR)