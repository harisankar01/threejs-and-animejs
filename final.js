import anime from 'animejs'
export function but(lighet,sper,butr,nw){
    lighet.visible=!lighet.visible;
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
}