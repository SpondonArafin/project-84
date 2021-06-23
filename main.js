canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "download.jpg";
car1_x = 10;
car1_y = 10;


car2_width = 120;
car2_width = 70;
car2_image = "download(1).jpg";
car2_x = 10;
car2_y = 100;

background_image = "download.png";


function add(){
    background_imageTag = new Image();
    background_imageTag.onload = uploadBackground;
    background_imageTag.src = background_image;

    car1_imageTag = new Image();
    car1_imageTag.onload = uploadcar1;
    car1_imageTag.src = car1_image;
}


function uploadBackground(){
        ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);
}