import anime from 'animejs';
anime({
  targets: '.letter',
  translateX: [
      {value: [150, -170], duration: 190, startDelay:150,endDelay: 10, easing: 'cubicBezier(0.825, 1, 0.915, 0.980)'},
      {value: 3, duration: 190, easing: 'easeOutElastic(1, .6)'},
      {value: 0, duration: 200, easing: 'easeInQuad'}
    ] 

});  


