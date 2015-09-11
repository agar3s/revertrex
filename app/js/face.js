var face = new Shape(headM, jawM);
face.setColor('#F1D1B7');
face.setPixelSize(10);
face.setPosition(0, 20);

var eye1 = new LayeredSprite([
  {key:eyeN,color:'#fff', layer:'N'},
  {key:eyeP,color:'#000', layer:'P'},
]);
eye1.setAnimation('eye');
eye1.setPixelSize(8);
eye1.sprites.map(function(sprite){sprite.direction=1});
eye1.setPosition(35, 55+20);

var eye2 = new LayeredSprite([
  {key:eyeN,color:'#fff', layer:'N'},
  {key:eyeP,color:'#000', layer:'P'},
]);
eye2.setAnimation('eye');
eye2.setPixelSize(8);
eye2.setPosition(25+16*8, 55+20);

var nose = new Sprite(noseM);
nose.setAnimation('noseM');
nose.setPixelSize(9);
nose.x = 88;
nose.y = 120;
nose.color = '#E1C1A7';

var mouth = new Sprite(mouthP);
mouth.setAnimation('mouthP');
mouth.setPixelSize(9);
mouth.x = 88;
mouth.y = 150;
mouth.color = '#333';