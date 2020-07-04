var turtle;
function setup(){
    createCanvas(displayWidth - displayWidth/28, displayHeight - displayHeight/6);
    turtle = new Turtle();
}

function draw(){
    background("blue");
    turtle.display();
    if(keyIsDown(32)){
        turtle.moveTurtleUp();
    }else{
        turtle.moveTurtleDown();
    }
    drawSprites();
}