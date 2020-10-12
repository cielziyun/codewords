function preload(){
font1= loadFont('data/Bostoncaps-lD5e.otf');
font2= loadFont('data/Modernia-Regular.otf');
}
let words = ["We are the hackers of abstractions", "We produce NEW CONCEPTS" , "NEW PRODUCTIONS", "NEW SENSATIONS", "Hackers create the possibility of new things entering the world", "Not always great things", "Or even good things", "But NEW things", "The sectoral world is dynamic", "All classes enter into relations of CONFLICT", "COLLUSION", "and COMPROMISE", "The class struggle drives history into abstraction", "and abstraction into history"];
let index = 0; 
let wiggle1 = 'abstraction';
let wiggle2 = 'new';
let wiggle3 = 'history';
let angle = 0.0;
let x = 100;
let y = 100;
let speedx = 1;
let speedy = 2;

function setup() {
  createCanvas(windowWidth, windowHeight); 
  //textFont("Futura");
  
}

function draw() {
  //background(235);
  textFont(font2);
  let sinval = cos(angle);
  let bg1 = map(sinval, -0.5, 0.5, 0, 255);
  let bg2 = map(sinval, -0.5, 0.5, 255, 0);
  background(bg1);
  angle += 0.05;
  fill(bg2);
  
  x = x + speedx;
  y = y + speedy;

  if ((x > width)||(x < 0)) 
  { speedx=speedx *-3;
}
  if ((y > height)||(y < 0)) 
  { speedy=speedy *-3;
} 
  
    for( let j = 1; j < 10; j++){
    for( let i = 0; i < wiggle1.length; i++){
      let x = cos(i/1.8 + frameCount / 90) * 70;
      let y = sin(i/1.8 + frameCount / 90) * 70;
      
      textSize(15);
      text(wiggle1[i], 1100 + x * j, windowHeight/2 + y * j); 
     
  }
}
      
    for( let a = 1; a < 6; a++){
    for( let b = 0; b < wiggle2.length; b++){
      let x = cos(b/0.5 + frameCount / 40) * 25;
      let y = sin(b/0.5 + frameCount / 40) * 25;
      
      textSize(10);
      text(wiggle2[b], 300 + x * a, 600 + y * a); 
   
  }
}
      
    for( let j = 1; j < 4; j++){
    for( let i = 0; i < wiggle3.length; i++){
      let x = cos(i/1.15 + frameCount / 30) * 30;
      let y = sin(i/1.15 + frameCount / 30) * 30;
      
      textSize(12);
      text(wiggle3[i], 250 + x * j, 180 + y * j);
    
  }
}
  
  textFont (font1);
  textSize(40);
  text(words[index],100,windowHeight/2);

}

function mousePressed(){
  index++;
  if(index > words.length-1){
   index = 0; 
  
  }
}
