
var cont = 0;
function gameloop(){
  ctx.fillStyle = '#fff';
  ctx.fillRect(0,0,580,580);
  cont++;
  if(cont%30==0){
    face.animate();
    eye1.animate();
    eye2.animate();
    nose.animate();
    mouth.animate();
    cont=0;
  }
  face.draw();
  eye1.draw();
  eye2.draw();
  nose.draw();
  mouth.draw();

  ra(gameloop);
}
ra(gameloop);
