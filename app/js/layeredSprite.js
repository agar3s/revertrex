
var LayeredSprite = function(sprites){
  var m = this;
  m.relx = 0;
  m.rely = 0;
  m.sprites = [];
  for (var i = 0; i < sprites.length; i++) {
    var sprite = new Sprite(sprites[i].key);
    sprite.color = sprites[i].color;
    sprite.layer = sprites[i].layer;
    m.sprites.push(sprite);
  };
  m.pixelSize = 0;
  m.setPixelSize = function(pixelSize){
    m.pixelSize = pixelSize;
    m.sprites.map(function(sprite){sprite.setPixelSize(pixelSize)});
  };
  m.animate = function(){
    m.sprites.map(function(sprite){sprite.animate()});
  };
  m.draw = function(){
    m.sprites.map(function(sprite){sprite.draw()});
  };
  m.setPosition = function(x, y){
    m.sprites.map(function(sprite){sprite.setPosition(x,y)});
  }
  m.setAnimation = function(name){
    m.sprites.map(function(sprite){sprite.setAnimation(name+sprite.layer)});
  }
}