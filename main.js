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
       player_object = Img;
       player_object.scaleToWidth(Width);
       player_object.scaleToHeight(Height);
       player_object.set({
           top: PlayerY,
           left: PlayerX
       });
       canvas.add(player_object);
    });
}

