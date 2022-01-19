import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
export function lights(){
const ligh=new THREE.SpotLight(0xFFFCFC)
ligh.castShadow = true;
ligh.intensity = 5;
ligh.visible=false;
ligh.penumbra = 1.5;
ligh.position.set(0,0,100);
ligh.lookAt(0,0,100);
return ligh;
}

export function Controls(camera,renderer){
const control=new OrbitControls(camera,renderer.domElement);
control.enableRotate = false;
control.enableDamping = true;
control.dampingFactor = 15;
control.screenSpacePanning = false;
control.minDistance = -100;
control.maxDistance = 150;
control.maxPolarAngle = Math.PI / 2;
 control.enablePan = true;
 control.panSpeed = 50;
 control.screenSpacePanning = false;
 return control;
}

export function spot(){
const light=new THREE.SpotLight(0xF7CAC9)
light.castShadow = true;
light.intensity = 5;
light.visible=false;
light.penumbra = 1.5;
light.angle = Math.PI / 2.5;
light.distance = 1000;
light.position.set(-5,-5,1);
return light;
}

export function spear(){
const mis =new THREE.TextureLoader().load('./images/misssile.jpeg')
const missile = new THREE.ConeGeometry( 4.92,21,33,25,false,1.1,6.285 );
const mateial = new THREE.MeshPhongMaterial( { color: 0xCEF000,emissive: 0x150306,map:mis,shininess:10 } );
const sper=new THREE.Mesh( missile, mateial );
sper.position.set(0,6,-24);
sper.visible=false;
sper.rotateX(30);
sper.rotateY(270);
return sper;
}

export function createLight( color ) {
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

export function rotate(torus,revo,time){
    torus.rotation.y+=0.02;
  torus.rotation.z+=13;
  torus.rotation.x-=0.01;
revo.position.x = Math.sin( time * 1 ) * 81 ;
revo.position.y = Math.sin( time * 1.1 ) * 21 + 9;
revo.position.z = Math.sin( time * 1.2 ) * -31;
revo.rotation.x = time;
revo.rotation.z = time;
}