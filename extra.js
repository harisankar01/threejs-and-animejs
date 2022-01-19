import * as THREE from 'three'
import anime from 'animejs'
export function add(scene){
var game=new Array();
const shine =new THREE.TextureLoader().load('./images/star.jpg') 
const geo=new THREE.IcosahedronGeometry(1.6,0);
const mat=new THREE.MeshStandardMaterial({color: 0xFFF8DC,map:shine, normalMap: shine})
for ( let i = 0; i < 200; i ++ ) { 
  const star=new THREE.Mesh(geo,mat);
  star.layers.set(0);
  star.position.x = Math.random() * 600 ;
	star.position.y = Math.random() * 300 ;
  star.position.z = Math.random() * -100 ;
	star.scale.x = star.scale.y = star.scale.z = Math.random() * 2 + 1;
  scene.add(star);
  game.push(star);
}
return game;
}

export function lay(raycaster,torus,camera,scene,control){
    const lighet = new THREE.HemisphereLight(0xffffff,0x424F5A,1);
lighet.position.set(0,0,2);
lighet.visible=false;
lighet.castShadow=false;
scene.add(lighet);
control.addEventListener('change', function () {
    raycaster.setFromCamera(torus.position,camera);
    const intersects = raycaster.intersectObjects(scene.children,false);
    if (intersects.length > 0) {
             intersects[0].object.material.color.setHex( Math.random() * 0xffffff ) 
    }
  })
  return lighet;
}

export function visible(revo,scene,light,ligh,bb,aa,img){
    revo.visible=false;
  scene.background =img;
   light.visible=true;
   ligh.visible=true;
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

export function delay(c,bb,){
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
return c;
}
export function last(control,torus,ligh,light,id,theme){
     control.enableZoom=false;
      control.enabled=false;
      torus.remove();
      ligh.remove();
      light.remove();
      cancelAnimationFrame(id);
      theme.setAttribute('href', 'newstyle.css');

}