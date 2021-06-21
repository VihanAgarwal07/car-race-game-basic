canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car1_width=120;
car1_height=70;
car1_Image="car1.png";
car1_x=10;
car1_y=10;

car2_width=120;
car2_height=70;
car2_Image="car2.png";
car2_x=10;
car2_y=100;

background="Racecar.gif";

function background_img_show(){
    bg_tag=new Image();
    bg_tag.onload=upload_bag;
    bg_tag.src="Racecar.gif";

    car1_tag=new Image();
    car1_tag.onload=upload_car1;
    car1_tag.src="car1.png";
    
    car2_tag=new Image();
    car2_tag.onload=upload_car2;
    car2_tag.src="car2.png";

}
function upload_bag(){
    ctx.drawImage(bg_tag,0,0,canvas.width,canvas.height)
}

function upload_car1(){
    ctx.drawImage(car1_tag,car1_x,car1_y,car1_width,car1_height);
}
function upload_car2(){
    ctx.drawImage(car2_tag,car2_x,car2_y,car2_width,car2_height);
}
//first project//

window.addEventListener("keydown",my_keydown)
function my_keydown(e){
    console.log(e.keyCode)
if(e.keyCode=="40"){
car1_Down();
console.log("down")
}
if(e.keyCode=="37"){
car1_Left();
            }
if(e.keyCode=="39"){
car1_Right();
            }
if(e.keyCode=="38"){
car1_up();
            }
if(e.keyCode=="83"){
car2_Down();
            }
if(e.keyCode=="65"){
car2_Left();
            }
if(e.keyCode=="68"){
car2_Right();
            }
if(e.keyCode=="87"){
car2_up();
            }
}
function car1_up(){
    if(car1_y>=10)
    car1_y=car1_y-20;
    upload_bag();
    upload_car1();
    upload_car2();
}
function car1_Down(){
    if(car1_y<=700){
    car1_y=car1_y+20;
    console.log("ghghghghghghgh")
    upload_bag();
    upload_car1();
    upload_car2();
    }
}
    function car1_Left(){
        if(car1_x>=10){
        car1_x=car1_x-10;
        console.log("ghghghghghghgh")
        upload_bag();
        upload_car1();
        upload_car2();
        }
}
function car1_Right(){
    if(car1_x<=800){
    car1_x=car1_x+10;
    console.log("ghghghghghghgh")
    upload_bag();
    upload_car1();
    upload_car2();
    }
}
function car2_up(){
    if(car2_y>=10){
    car2_y=car2_y-10;
    console.log("ghghghghghghgh")
    upload_bag();
    upload_car1();
    upload_car2();
    }
}
function car2_Down(){
    if(car2_y<=700){
    car2_y=car2_y+10;
    console.log("ghghghghghghgh")
    upload_bag();
    upload_car1();
    upload_car2();
    }
}
function car2_Left(){
    if(car2_x>=10){
    car2_x=car2_x-10;
    console.log("ghghghghghghgh")
    upload_bag();
    upload_car1();
    upload_car2();
    }
}
function car2_Right(){
    if(car2_x<=800){
    car2_x=car2_x+10;
    console.log("ghghghghghghgh")
    upload_bag();
    upload_car1();
    upload_car2();
    }
}