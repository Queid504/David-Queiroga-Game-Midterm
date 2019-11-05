let protag1;
let npc01, npc02, npc03;
let apple1, apple2, apple3;
let rand1;
let score;
let scene = 0;
let DootIt = [];
let mapIt = [];
fade = false;
a = 0;

function setup() {
  createCanvas(600, 400);
  rectMode(CENTER);
  //====================================================
  DootIt[0] = loadImage('assets/Main_Protag_R.png');
  DootIt[1] = loadImage('assets/Parent_01.png');
  DootIt[2] = loadImage('assets/Parent_02.png');
  DootIt[3] = loadImage('assets/NPC_1.png');
  DootIt[4] = loadImage('assets/Main_Protag_L.png');
  DootIt[5] = loadImage('assets/NPC_2.png');
  DootIt[6] = loadImage('assets/NPC_3.png');
  DootIt[7] = loadImage('assets/NPC_4.png');
  DootIt[8] = loadImage('assets/NPC_5.png');
  DootIt[9] = loadImage('assets/NPC_6.png');
  DootIt[10] = loadImage('assets/NPC_7.png');
  DootIt[19] = loadImage('assets/Apple_Point.png');
  DootIt[20] = loadImage('assets/Brother_01.png');
  //====================================================
  mapIt[0] = loadImage('maps/MAP_1.png');
  mapIt[1] = loadImage('maps/MAP_2.png');
  mapIt[2] = loadImage('maps/MAP_3.png');
  mapIt[3] = loadImage('maps/MAP_4.png');
  mapIt[4] = loadImage('maps/MAP_5.png');
  mapIt[5] = loadImage('maps/MAP_6.png');
  mapIt[6] = loadImage('maps/MAP_7.png');
  //====================================================
  protag1 = new Protagonist(width / 2, height - 5);
  //====================================================
  npc01 = new NPCs(180, 300, color(27, 195, 75));
  npc02 = new NPCs(400, 100, color(27, 195, 75));
  npc03 = new NPCs(220, 170, color(86, 170, 251));
  npc04 = new NPCs(170, 300, color(171, 86, 251));
  npc05 = new NPCs(500, 200, color(171, 86, 251));
  npc06 = new NPCs(420, 200, color(248, 86, 251));
  npc07 = new NPCs(200, 100, color(248, 86, 251));
  npc08 = new NPCs(300, 200, color(251, 86, 98));
  npc09 = new NPCs(400, 300, color(251, 161, 86));
  npc10 = new NPCs(250, 200, color(252, 255, 158));
  npc11 = new NPCs(250, 200, color(0, 255, 0));
  //====================================================
  apple1 = new Dot(200, 350);
  apple2 = new Dot(400, 200);
  apple3 = new Dot(300, 350);
  apple4 = new Dot(100, 200);
  apple5 = new Dot(300, 150);
  apple6 = new Dot(200, 200);
  apple7 = new Dot(400, 300);
  apple8 = new Dot(500, 320);
  apple9 = new Dot(100, 200);
  apple10 = new Dot(500, 250);
  //====================================================

  let rand1 = random(10, 390);
  score = 0;
}

function draw() {
  background(80);

  let s = second();

  if (scene == 0) {
    Scene0();
  } else if (scene == 1) {
    Scene1();
  } else if (scene == 2) {
    Scene2();
  } else if (scene == 3) {
    Scene3();
  } else if (scene == 4) {
    Scene4();
  } else if (scene == 5) {
    Scene5();
  } else if (scene == 6) {
    Scene6();
  } else if (scene == 7) {
    Scene7();
  } else if (scene == 8) {} else if (scene == 9) {} else if (scene == 10) {
    Scene10();
  }

  if (s % 2 == 0) {
    fade = true;
  } else {
    fade = false;
  }
  if (fade == true) {
    if (a < 255) {
      a = a + 4;
    }
  } else if (fade == false) {
    if (a > 0) {
      a = a - 4;
    }
  }

  if (keyIsPressed == true) {
    if (keyCode == UP_ARROW) {
      protag1.protagY -= 3;
      protag1.showR();
    }
  }
  if (keyIsPressed == true) {
    if (keyCode == DOWN_ARROW) {
      protag1.protagY += 3;
      protag1.showL();
    }
  }
  if (keyIsPressed == true) {
    if (keyCode == RIGHT_ARROW) {
      protag1.protagX += 3;
      protag1.showR();

    }
  }
  if (keyIsPressed == true) {
    if (keyCode == LEFT_ARROW) {
      protag1.protagX -= 3;
      protag1.showL();
    }
  }

  if (keyIsPressed == false) {
    protag1.showG();
  }

  if (protag1.protagY < 0) {
    protag1.protagY = height;
    scene++;
  }

  if (protag1.protagY > 400) {
    protag1.protagY = height - 400;
    scene--;
  }

  fill(255);
  noStroke();
  textSize(15);
  text("Apples: " + score, (width / 2) - 30, 30);

}

function Scene0() {
  background(0);
  fill(255)
  textSize(30);
  text('"Wake up little one."', 180, 200);
  textSize(10);
  text('"you need to find your brother"', 235, 230);

  fill(255, 255, 255, a);
  textSize(15);
  text('Continue forward child', 230, 280);
let d = dist(protag1.protagX, protag1.protagY, apple2.xpos, apple2.ypos);

  if (apple2.alive == true) {
    apple2.point();
  } else if (apple2.alive == false) {
    apple2.noPoint();
  }

  if (d < 30) {
    if (apple2.scoring == false) {
      apple2.scoring = true;
      score++;
    }
    if (apple2.alive == true) {
      apple2.alive = false;
    }
  }

}

function Scene1() {
  image(mapIt[0], 0, 0);

  stroke(0);
  npc01.show(1);
  npc01.checkCollision();
  npc01.dialogBox("Good morning my son. Can you find your brother?");

  npc02.show(2);
  npc02.checkCollision();
  npc02.dialogBox("Hello my son. Your brother is missing.");

  let d = dist(protag1.protagX, protag1.protagY, apple1.xpos, apple1.ypos);

  if (apple1.alive == true) {
    apple1.point();
  } else if (apple1.alive == false) {
    apple1.noPoint();
  }

  if (d < 30) {
    if (apple1.scoring == false) {
      apple1.scoring = true;
      score++;
    }
    if (apple1.alive == true) {
      apple1.alive = false;
    }
  }
}

function Scene2() {
  image(mapIt[1], 0, 0);

  npc03.show(3);
  npc03.checkCollision();
  npc03.dialogBox("Hey lil' dino. I saw your brother go up there!");
  npc03.dialogBox2("You should maybe catch up to him!");
let d = dist(protag1.protagX, protag1.protagY, apple5.xpos, apple5.ypos);

  if (apple5.alive == true) {
    apple5.point();
  } else if (apple5.alive == false) {
    apple5.noPoint();
  }

  if (d < 30) {
    if (apple5.scoring == false) {
      apple5.scoring = true;
      score++;
    }
    if (apple5.alive == true) {
      apple5.alive = false;
    }
  }

}

function Scene3() {
  image(mapIt[2], 0, 0);

  npc04.show(5);
  npc04.checkCollision();
  npc04.dialogBox("Howdy kid. What're you doin' around here?");

  npc05.show(6);
  npc05.checkCollision();
  npc05.dialogBox("Did you know that if you go forward 3 more times");
  npc05.dialogBox2("from your brother, you can see the ending screen?");
  let d = dist(protag1.protagX, protag1.protagY, apple6.xpos, apple6.ypos);

  if (apple6.alive == true) {
    apple6.point();
  } else if (apple6.alive == false) {
    apple6.noPoint();
  }

  if (d < 30) {
    if (apple6.scoring == false) {
      apple6.scoring = true;
      score++;
    }
    if (apple6.alive == true) {
      apple6.alive = false;
    }
  }

}

function Scene4() {
  image(mapIt[3], 0, 0);

  npc06.show(7);
  npc06.checkCollision();
  npc06.dialogBox("Hey, are you collecting those apples? do it.");

  npc07.show(8);
  npc07.checkCollision();
  npc07.dialogBox("I'd suggest not skipping us 'common' folk.");
  npc07.dialogBox2("We've got some good things to say.");
  let d = dist(protag1.protagX, protag1.protagY, apple7.xpos, apple7.ypos);

  if (apple7.alive == true) {
    apple7.point();
  } else if (apple7.alive == false) {
    apple7.noPoint();
  }

  if (d < 30) {
    if (apple7.scoring == false) {
      apple7.scoring = true;
      score++;
    }
    if (apple7.alive == true) {
      apple7.alive = false;
    }
  }

}

function Scene5() {
  image(mapIt[4], 0, 0);

  npc08.show(9);
  npc08.checkCollision();
  npc08.dialogBox("Welcome child. This is my area child.");
  npc08.dialogBox2("Enjoy the scenary child.");
  
  let d = dist(protag1.protagX, protag1.protagY, apple8.xpos, apple8.ypos);

  if (apple8.alive == true) {
    apple8.point();
  } else if (apple8.alive == false) {
    apple8.noPoint();
  }

  if (d < 30) {
    if (apple8.scoring == false) {
      apple8.scoring = true;
      score++;
    }
    if (apple8.alive == true) {
      apple8.alive = false;
    }
  }

}

function Scene6() {
  image(mapIt[5], 0, 0);

  npc09.show(10);
  npc09.checkCollision();
  npc09.dialogBox("Hey. Did you know that dinosaurs are extinct?");
  npc09.dialogBox2("Betcha didn't know that.");
  
  let d = dist(protag1.protagX, protag1.protagY, apple9.xpos, apple9.ypos);

  if (apple9.alive == true) {
    apple9.point();
  } else if (apple9.alive == false) {
    apple9.noPoint();
  }

  if (d < 30) {
    if (apple9.scoring == false) {
      apple9.scoring = true;
      score++;
    }
    if (apple9.alive == true) {
      apple9.alive = false;
    }
  }
}

function Scene7() {
  image(mapIt[6], 0, 0);

  npc11.showfinal(20);
  npc11.endGame();
  
  let d = dist(protag1.protagX, protag1.protagY, apple10.xpos, apple10.ypos);

  if (apple10.alive == true) {
    apple10.point();
  } else if (apple10.alive == false) {
    apple10.noPoint();
  }

  if (d < 30) {
    if (apple10.scoring == false) {
      apple10.scoring = true;
      score++;
    }
    if (apple10.alive == true) {
      apple10.alive = false;
    }
  }
}

function Scene10() {
  background(0);
  textSize(40);
  text("Thanks for playing!", 100, 200)
  textSize(10);
  text("You collected " + score + " apples. There are " + (8 - score) + " apples left", 100, 230)
}

class Protagonist {
  constructor(x, y) {
    this.protagX = x;
    this.protagY = y;
  }

  showG() {
    stroke(0);
    image(DootIt[0], this.protagX, this.protagY, 25, 25);
  }
  showR() {
    stroke(0);
    image(DootIt[0], this.protagX, this.protagY, 25, 25);
  }
  showL() {
    stroke(0);
    image(DootIt[4], this.protagX, this.protagY, 25, 25);
  }

}

class NPCs {
  constructor(x, y, c) {
    this.npcX = x;
    this.npcY = y;
    this.npcC = c;
  }

  show(pic) {
    fill(this.npcC);
    //rect(this.npcX, this.npcY, 50, 50, 10);
    image(DootIt[pic], this.npcX - 25, this.npcY - 25, 50, 50);
  }

  showfinal(pic1) {
    fill(this.npcC);
    //rect(this.npcX, this.npcY, 25, 25, 10);
    image(DootIt[pic1], this.npcX - 5, this.npcY - 5, 20, 20);

  }

  checkCollision() {
    if ((this.npcX > protag1.protagX - 35) && (this.npcX < protag1.protagX + 35) && (this.npcY > protag1.protagY - 35) && (this.npcY < protag1.protagY + 35)) {
      fill(240);
      rect(300, 500, 600, 400, 20);

    }

  }

  endGame() {
    if ((this.npcX > protag1.protagX - 15) && (this.npcX < protag1.protagX + 15) && (this.npcY > protag1.protagY - 15) && (this.npcY < protag1.protagY + 15)) {
      Scene10();

    }
  }

  dialogBox(dialog) {
    if ((this.npcX > protag1.protagX - 35) && (this.npcX < protag1.protagX + 35) && (this.npcY > protag1.protagY - 35) && (this.npcY < protag1.protagY + 35)) {

      fill(0);
      textSize(25);
      text(dialog, 20, 335);

    }
  }

  dialogBox2(dialog2) {
    if ((this.npcX > protag1.protagX - 35) && (this.npcX < protag1.protagX + 35) && (this.npcY > protag1.protagY - 35) && (this.npcY < protag1.protagY + 35)) {

      fill(0);
      textSize(25);
      text(dialog2, 20, 335 + 35);

    }
  }
}

class Dot {

  constructor(x, y) { // set default properties
    this.xpos = x;
    this.ypos = y;
    this.alive = true;
    this.scoring = false;
  }

  point() {

    image(DootIt[19], this.xpos, this.ypos, 10, 10);
  }
  noPoint() {

  }
}