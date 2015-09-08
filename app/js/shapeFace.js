
function Shape(head, jaw){
  var m = this;
  m.pixelSize = 1;
  m.sprites = [];
  var head1 = new Sprite(head);
  head1.direction = 1;
  head1.setAnimation('headM');
  var head2 = new Sprite(head);
  head2.relx = 1;
  head2.setAnimation('headM');
  var jaw1 = new Sprite(jaw);
  jaw1.direction = 1;
  jaw1.rely = 1;
  jaw1.setAnimation('jawM');
  var jaw2 = new Sprite(jaw);
  jaw2.relx = 1;
  jaw2.rely = 1;
  jaw2.setAnimation('jawM');

  m.sprites.push(head1);
  m.sprites.push(head2);
  m.sprites.push(jaw1);
  m.sprites.push(jaw2);

  m.setPosition = function(x, y){
    m.sprites.map(function(sprite){
      sprite.x = x+sprite.relx*16*m.pixelSize;
      sprite.y = y+sprite.rely*16*m.pixelSize;
    });
  }

  m.setPixelSize = function(pixelSize){
    m.pixelSize = pixelSize;
    m.sprites.map(function(sprite){sprite.setPixelSize(pixelSize);});
  }
  m.draw = function(){
    m.sprites.map(function(sprite){sprite.draw();});
  }

  m.animate = function(){
    m.sprites.map(function(sprite){sprite.animate();});
  }
  m.setColor = function(color){
    m.sprites.map(function(sprite){sprite.color=color;});
  }

};
