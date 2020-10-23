var walker;
var walkers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
   
  for(var i = 0; i < 100; i++){
    walkers.push(new Walker(width/2, height/2));
  }
}

function draw() {
  for(var c = 0; c < walkers.length; c++){
     walkers[c].update();
     walkers[c].draw();
   }
   
   if(mouseIsPressed){
    filter(GRAY);
     walkers.push(new Walker(mouseX, mouseY));
   }
}

function Walker(posX, posY){
    
    this.position = new createVector(posX, posY);
    this.aleatorio1 = new createVector(random(-20, 20), random(-20, 20));
    this.aleatorio2 = new createVector(random(-2, 1), random(-2, 2));
    this.aleatorio3 = new createVector(random(-0.5, 1), random(0.1, 1));
    this.colore = new createVector(random(0, 255), random(0, 255), random(0, 255));
    
    this.update = function(){
         var movement = random(1,3);
         var move = round(movement);
         var inWidth = this.position.x > 0 && this.position.x < width;
         var inHeight = this.position.y > 0 && this.position.y < height;
        
        if(inWidth && inHeight){
        switch(move){
          case 1:
              this.position.add(this.aleatorio1);
              break;
          case 2:
              this.position.add(this.aleatorio2);
              break;
          case 3:
              this.position.add(this.aleatorio3);
              break;
        }
      }
    };
    
    this.draw = function() {
       var inWidth = this.position.x > 0 && this.position.x < width;
       var inHeight = this.position.y > 0 && this.position.y < height;
       
       if(inWidth && inHeight){
        fill(this.colore.x, this.colore.y, this.colore.z);
        rect(this.position.x, this.position.y,20,20);
       }
    };
    
};
