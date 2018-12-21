var pares=[];
var impares=[];
var aleatorio=0;
for (var i=0;i<50;i++){
  aleatorio= Math.floor((Math.random() * 100) + 1);
  if(aleatorio%2==0)
    pares.push(aleatorio);
  else {
    impares.push(aleatorio);
  }
}
