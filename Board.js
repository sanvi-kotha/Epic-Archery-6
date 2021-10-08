class Board {

constructor (x,y,width,height) {
var options = {
isStatic:true
};

this.body = bodies.rectangle(x,y, width, height, options);
 
this.width = width;
this.height = height;
this.image = loadImage("./assets/board.png");

World.add(world, this.body);

}

display() {
var pos = this.body.position;
push();
imageMode(CENTER);
image( this.image, pos.x, pos.y, this.width, this.height);
pop();

board1 = new Board(width - 300, 330, 50, 200);
board2 = new Board(width - 550, height - 300, 50, 200);


board1.display();
board2.display();
}
}