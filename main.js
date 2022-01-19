import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import anime from 'animejs'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import Stats from '/states.js';
import { Color } from 'three';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 10, 2000 );
camera.position.setX(0);camera.position.setY(10)
camera.position.setZ(-140);
// scene.fog = new THREE.FogExp2( 0x464849, 0.0025 );
// camera.position.set( 0, 0, 100 ); 
// last two values are for the view frustrum
//const renderer = new THREE.WebGLRenderer({canvas : document.querySelector('#bg') });
const renderer = new THREE.WebGLRenderer({antialias: true,
canvas: document.querySelector('#bg')
});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
// const fog = new THREE.FogExp2(fogColor, 0.5);
// scene.add(fog);
// const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
// const points = [];
// points.push( new THREE.Vector3( 20, 0, 12 ) );
// points.push( new THREE.Vector3( 0, 10, 12 ) );
// points.push( new THREE.Vector3( 10, 0, 12 ) );

// const geometry = new THREE.BufferGeometry().setFromPoints( points );

// const line = new THREE.Line( geometry, material );
// scene.add(line);
const mis =new THREE.TextureLoader().load('misssile.jpeg')
const missile = new THREE.ConeGeometry( 4.92,21,33,25,false,1.1,6.285 );
const mateial = new THREE.MeshPhongMaterial( { color: 0xCEF000,emissive: 0x150306,map:mis,shininess:10 } );
const sper=new THREE.Mesh( missile, mateial );
sper.position.set(0,6,-24);
sper.visible=false;
sper.rotateX(30);
sper.rotateY(270);
scene.add(sper);
const geomentry =new THREE.TorusGeometry(25,4,26,29,10)
const material=new THREE.MeshPhongMaterial({color: 0x393737 ,emissive: 0x150306,transparent:true,shininess:10});
const torus=new THREE.Mesh(geomentry,material);
torus.castShadow=true;
torus.layers.set(0);
// const mar=new THREE.MeshLambertMaterial();
// const material=new THREE.MeshLambertMaterial({color: 0x0000ff ,transparent:true,opacity:1});

// const material = new THREE.MeshToonMaterial()
const clock = new THREE.Clock();
scene.add(torus);
const light=new THREE.SpotLight(0xF7CAC9)
light.castShadow = true;
light.intensity = 5;
light.visible=false;
light.penumbra = 1.5;
light.angle = Math.PI / 2.5;
light.distance = 1000;
light.position.set(-5,-5,1);
light.target=torus;
//const ambient =new THREE.AmbientLight(0xffffff);
const help=new THREE.GridHelper(220,40);
scene.add(light);
scene.add(light.target)
// scene.add(help);
const control=new OrbitControls(camera,renderer.domElement);
control.enableRotate = false;
// control.enableZoom=true;
control.enableDamping = true;
control.dampingFactor = 15;
control.screenSpacePanning = false;
control.minDistance = -100;
control.maxDistance = 150;
control.maxPolarAngle = Math.PI / 2;
 control.enablePan = true;
 control.panSpeed = 50;
 control.screenSpacePanning = false;
// // control.keyPanSpeed = 7.0;
// // control.target=torus;
var game=new Array();
const shine =new THREE.TextureLoader().load('star.jpg') 
const geo=new THREE.IcosahedronGeometry(1.6,0);
const mat=new THREE.MeshStandardMaterial({color: 0xFFF8DC,map:shine, normalMap: shine})
for ( let i = 0; i < 200; i ++ ) { 
//   const edges = new THREE.EdgesGeometry( geo );
//const line = new THREE.LineSegments( geo, new THREE.MeshStandardMaterial({color: 0xFFF8DC,map:shine}) );
  const star=new THREE.Mesh(geo,mat);
  star.layers.set(0);
  star.position.x = Math.random() * 600 ;
	star.position.y = Math.random() * 300 ;
  star.position.z = Math.random() * -100 ;
	star.scale.x = star.scale.y = star.scale.z = Math.random() * 2 + 1;
  // const [x,y,z]=Array(3)
  //  .fill()
  //  .map(()=> THREE.MathUtils.randFloatSpread(100));
  // star.position.set(x,y,z);
  scene.add(star);
  game.push(star);
}

//  Array(200).fill().forEach()
let mixer, action,ref;
const loader= new FBXLoader();
loader.load( './drone.fbx', function ( object ) {
  object.position.set(-90,20,100);
    object.scale.set(0.1,0.1,0.1);
    object.rotateX(210);
    // object.rotateZ(30/);
    ref=object;
    object.visible=false;
  mixer = new THREE.AnimationMixer( object );
	action = mixer.clipAction( object.animations[ 0 ] );
  // gltf.scene.scale.set(24,24,2);
  // gltf.scene.position.set(0,0,5);
  // gltf.scene.position.set0(0,0,-5);
  // gltf.scene.layers.set(0)
  object.layers.set(2);
  // scene.add(gltf.scene);
  object.traverse( function ( child ) {
							child.castShadow = true;
							child.receiveShadow = true;
              child.color=0x351212;
              child.autorotate=true;
					} );
scene.add( object );

}, undefined, function ( error ) {

	console.error( error );

} );
// function pull(){
//     requestAnimationFrame(pull);
//     while(i<201){
//         game[i].position.x+=0.1;
//         i++;
//     }
//      renderer.render(scene,camera);
// }
// const lght = new THREE.SpotLight(0xc4c4c4,10);
// lght.position.set(0,0,100);
// scene.add(lght);
const ligh=new THREE.SpotLight(0xFFFCFC)
ligh.castShadow = true;
ligh.intensity = 5;
ligh.visible=false;
ligh.penumbra = 1.5;
ligh.position.set(0,0,100);
ligh.lookAt(0,0,100);
const img=new THREE.TextureLoader().load('img2.jpeg');

let t=0;
var frame = 0,
maxFrame = 500,
lt = new Date(),
fps = 24;
const raycaster = new THREE.Raycaster();
const lighet = new THREE.HemisphereLight(0xffffff,0x424F5A,1);
lighet.position.set(0,0,2);
lighet.visible=false;
lighet.castShadow=false;
scene.add(lighet);
control.addEventListener('change', function () {
    // xLine.position.copy(control.target)
    // yLine.position.copy(control.target)
    // zLine.position.copy(control.target)
    // // raycaster.set(
    //     control.target,
    //     dir.subVectors(camera.position, torus).normalize() //set pos,dir
    // )
    raycaster.setFromCamera(torus.position,camera);
    const intersects = raycaster.intersectObjects(scene.children,false);
    if (intersects.length > 0) {
             intersects[0].object.material.color.setHex( Math.random() * 0xffffff )
             
        // if (
        //     intersects[0].distance < control.target.distanceTo(camera.position)
        // ) {
        //   torus.position.x+=23;
        //     // camera.position.copy(intersects[0].point)
        // }
    }
  })

// renderer.domElement.addEventListener('mouseenter', onDoubleClick, false)
// function onDoubleClick(event) {
//     const mouse = {
//         x= (event.clientX / renderer.domElement.clientWidth) * 2 - 1,
//         y= -(event.clientY / renderer.domElement.clientHeight) * 2 + 1,
//     }
//     raycaster.setFromCamera(mouse, camera)
//     const intersects = raycaster.intersectObjects(torus, false)
//   }
const butr=document.getElementById('but');
butr.addEventListener('click',function (){
  lighet.visible=!lighet.visible;
  	action.play();
    ref.visible=!ref.visible;
    sper.visible=!sper.visible;
    sper.position.set(0,6,-24);
    butr.remove();
    nw.remove();
     anime({
  targets: '.sidemain',
  translateY: [
      {value: [0, -450], duration: 4000, startDelay:100, easing: 'easeOutElastic(1, .6)'},
    ],
    delay: anime.stagger(100),
});  
})
function createLight( color ) {
					const intensity = 1.5;
					const ight = new THREE.PointLight( color, intensity, 20 );
					ight.castShadow = true;
					ight.shadow.bias = - 0.005; 
					const geometry = new THREE.SphereGeometry( 2, 32, 8 );
					const material = new THREE.MeshPhongMaterial( {
						side: THREE.DoubleSide,
						alphaTest: 0.5
					} );
					const sphere = new THREE.Mesh( geometry, material );
					sphere.castShadow = true;
					sphere.receiveShadow = true;
					ight.add( sphere );
          return ight;
}
function sleep(milliseconds) {
            let timeStart = new Date().getTime();
            while (true) {
                let elapsedTime = new Date().getTime() - timeStart;
                if (elapsedTime > milliseconds) {
                    break;
                }
            }
        }
const nw=document.querySelector('.letter');
let theme = document.getElementsByTagName('link')[1];
const revo=createLight(0xF4A50A);
revo.position.set(0,0,10);
revo.scale.set(200,200,200);
revo.intensity=12;

scene.add(revo);
let c=0,d=0;
let aa=document.querySelector('.sidemain');
let bb=document.querySelector('.first');
bb.addEventListener('click',ch);
function ch(){
  revo.visible=false;
  scene.background =img;
   light.visible=true;
   ligh.visible=true;
  //  const aaa=document.querySelector('.fle');
  //  aaa.style.zIndex='3';

  //  anime({
  // targets: '.fle',
  // translateY: {value: [150, -160], duration: 190, startDelay:150,endDelay: 10, easing: 'cubicBezier(0.225, 1, 0.915, 0.980)'},
  //  })
   bb.remove();
   anime({
  targets: '.letter',
  translateX: {value: [150, -160], duration: 400, startDelay:150,endDelay: 10, easing: 'linear'},
  delay: anime.stagger(1000)
   })
  aa.style.visibility='visible';
  anime({
  targets: '.sidemain',
  translateX: [
      {value: [-150, 600], duration: 190, startDelay:150, easing: 'linear'},
      {value: 1600, duration: 400, easing: 'linear'},
      {value: 1020, duration: 500, easing: 'linear'}
    ],
});  
}



function ani(){
  const id=requestAnimationFrame(ani);
      if(camera.position.z>-130){
        if(c==0){
          bb.style.visibility=  'visible';
          c=c+1;
          anime({
        targets: '.efff',
        translateY: function(el, i) {
          return 50 + (-50 * i);
        },
        translateX:function(el, i) {
          return 500 + (-50 * i);
        },
        scale: function(el, i, l) {
          return (1 - i) + 0.5;
        },
        duration: function() { return anime.random(1200, 1800); },
        delay: function() { return anime.random(0, 400); },
        direction: 'alternate',
        loop: false
      });
        }
      }
        if(camera.position.z>-100){
        if(d==0){
          butr.style.visibility=  'visible';
          d=d+1;
          anime({
        targets: '#but',
        translateX:function(el, i) {
          return 500 + (90 * i);
        },
         translateY: function(el, i) {
          return -120 - (100 * i);
        },
        scale: function(el, i, l) {
          return (1 - i) + 0.5;
        },
        duration: function() { return anime.random(1200, 1800); },
        delay: function() { return anime.random(0, 400); },
        direction: 'alternate',
        loop: false
      });
        }
      } 



      let time = performance.now() * 0.001;
      const timer = 0.0001 * Date.now();
      for ( let i = 0, il = game.length; i < il; i ++ ) {
					const sphere = game[ i ];
					sphere.position.x = -90 * Math.cos( timer + i * 1.1);
				sphere.position.y = 44 * Math.sin( timer + i );
				}
       var now = new Date(),
        secs = (now - lt) / 1000,
        per = frame / maxFrame,
        bias=1 - Math.abs(0.5 - per) / 0.5;
  torus.rotation.y+=0.02;
  torus.rotation.z+=13;
  torus.rotation.x-=0.01;
  ref.rotation.x-=0.02;
  ref.rotation.y-=0.02;
  ref.position.y-=0.02;
  ref.position.x+=0.2;
  ref.position.y+=0.01;
revo.position.x = Math.sin( time * 1 ) * 81 ;
revo.position.y = Math.sin( time * 1.1 ) * 21 + 9;
revo.position.z = Math.sin( time * 1.2 ) * -31;
revo.rotation.x = time;
revo.rotation.z = time;
time+=10000;
  if(ref.position.x>140){
    ref.position.setX(-100);
  }
  sper.position.z-=0.8;
   if(camera.position.z>-6){
      control.enableZoom=false;
      control.enabled=false;
      torus.remove();
      ligh.remove();
      light.remove();
      cancelAnimationFrame(id);
      theme.setAttribute('href', 'newstyle.css');

    }
  control.update();
  const delta = clock.getDelta();
	 if ( mixer ) mixer.update( delta );     
render();
 if (secs > 1 / fps) {
            light.target.position.set(-1 * 2 * bias, 0, 0);
            renderer.render(scene, camera);
            frame += fps * secs;
            frame = frame % maxFrame;
            lt = now;
        }
}
function render(){
    renderer.render(scene, camera)
}
ani();

