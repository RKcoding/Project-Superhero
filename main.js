var canvas = new fabric.Canvas("myCanvas");

Width = 30;
Height = 30;

PlayerX = 10;
PlayerY = 10;

var player_object = "";
var block_image_object = "";


function player_update() {
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
           top: PlayerY,
           left: PlayerX
        });
        canvas.add(player_object);
    });
}

function new_image (get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
       block_image_object = Img;
       block_image_object.scaleToWidth(Width);
       block_image_object.scaleToHeight(Height);
       block_image_object.set({
           top: PlayerY,
           left: PlayerX
       });
       canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '80') {
        console.log("p and shift pressed together");
        Width = Width + 10;
        Height = Height + 10;
        document.getElementById("width").innerHTML = Width;
        document.getElementById("height").innerHTML = Height;
    }
    
    if (e.shiftKey == true && keyPressed == '77') {
        console.log("m and shift pressed together");
        Width = Width - 10;
        Height = Height - 10;
        document.getElementById("width").innerHTML = Width;
        document.getElementById("height").innerHTML = Height;
    }
    
    if (keyPressed == '70') {
        new_image('ironman_face.png');
        console.log("f");
    }
    
    if (keyPressed == '66') {
        new_image('hulkd_body.png');
        console.log("b");
    }
    
    if (keyPressed == '76') {
        new_image('spiderman_legs.png');
        console.log("l");
    }
    
    if (keyPressed == '82') {
        new_image('thor_right_hand.png');
        console.log("r");
    }
    
    if (keyPressed == '72') {
        new_image('captain_america_left_hand.png');
        console.log("h");
    }
    
    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    
    if (keyPressed == '39') {
        right();
        console.log("right");
    }
}
    function up() {
        if(PlayerY >=0) {
            PlayerY = PlayerY - Height;
            console.log("block image height = " + Height);
            console.log("When the up arrow key is pressed, X = " + PlayerX + ", Y = " + PlayerY);
            canvas.remove(player_object);
            player_update();
        }
    }
    
    function down() {
        if(PlayerY <=500) {
            PlayerY = PlayerY + Height;
            console.log("block image height = " + Height);
            console.log("When the down arrow key is pressed, X = " + PlayerX + ", Y = " + PlayerY);
            canvas.remove(player_object);
            player_update();
        }
    }
    
    function left() {
        if(PlayerX >0) {
            PlayerX = PlayerX - Width;
            console.log("block image width = " + Width);
            console.log("When the left arrow key is pressed, X = " + PlayerX + ", Y = " + PlayerY);
            canvas.remove(player_object);
            player_update();
        }
    }
    
     function right() {
        if(PlayerX <=850) {
            PlayerX = PlayerX + Width;
            console.log("block image width = " + Width);
            console.log("When the right arrow key is pressed, X = " + PlayerX + ", Y = " + PlayerY);
            canvas.remove(player_object);
            player_update();
        }
    }