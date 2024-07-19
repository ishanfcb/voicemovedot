let lang;
  // console.log('lang')
let speechRec;
let command;

function setup(){
  // noCanvas();
  createCanvas(600, 400);
  background(94, 98, 184);
  textSize(22);
  textAlign(CENTER);
  text("say one of the following: up, down, left, right", width/2, height / 4);
  
  let lang = navigator.language || 'en-US';
  console.log(lang);
  let speechRec = new p5.SpeechRec(lang, gotSpeech);
  
  // console.log('speechRec')
  let continuous = true;
  let interim = false;
  
  speechRec.start(continuous, interim);
  
  function gotSpeech(){
    if (speechRec.resultValue == true){
      command = speechRec.resultString;
      textAlign(CENTER)
      console.log(command);
    }
  
  }
}

let x = 300;
let y= 200;

function draw(){
  console.log(command);
  point(x,y);
  strokeWeight(14);
  stroke('red');
  
//   let speechRec;
  if(command == "right"){
    x = x + 20;
    command = 'bla';
  } 
  else if (command == "left"){
    x = x - 20;
    command = 'bla';
  }
  else if(command == "up"){
    y = y - 20;
    command = 'bla';
  } 
  else if (command == "down"){
    y = y + 20;
    command = 'bla';
  }
}