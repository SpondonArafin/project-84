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


function add() {
    background_imageTag = new Image();
    background_imageTag.onload = uploadBackground;
    background_imageTag.src = background_image;

    car1_imageTag = new Image();
    car1_imageTag.onload = uploadcar1;
    car1_imageTag.src = car1_image;

    car2_imageTag = new Image();
    car2_imageTag.onload = uploadcar2;
    car2_imageTag.src = car2_image;
}


function uploadBackground() {
    ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2() {
    ctx.drawImage(car2_imgTag, car2_x, car1_y, car2_width, car2_height);
}






window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        car1_up();
        console.log("up arrow key");
    }

    if (keyPressed == '40') {
        car1_down()
        console.log(("down arrow key"))

       

            if (keyPressed == '37') {
                car1_up();
                console.log("left arrow key");
            }


            if (keyPressed == '39') {
                car1_left();
                console.log("left arrow key");
            } 


            if (keyPressed == '87') {
                car1_up();
                console.log("key w");
            }
            if (keyPressed == '38') {
        car1_up();
        console.log("up arrow key");
    }

    if (keyPressed == '40') {
        car2_down()
        console.log(("down arrow key"))

       

            if (keyPressed == '37') {
                car2_up();
                console.log("left arrow key");
            }


            if (keyPressed == '39') {
                car2_up();
                console.log("left arrow key");
            } 


            if (keyPressed == '87') {
                car2_up();
                console.log("key w");
            }
        }
    }
}
