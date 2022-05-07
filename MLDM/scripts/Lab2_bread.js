type="text/javascript"
all_images = new Array ("../bread/1.png", "../bread/2.png", "../bread/3.png", "../bread/4.png",
    "../bread/5.png", "../bread/6.png", "../bread/7.png", "../bread/8.png", "../bread/9.png", "../bread/10.png",
    "../bread/11.png", "../bread/12.png", "../bread/13.png", "../bread/14.png", "../bread/15.png", "../bread/16.png",
    "../bread/17.png", "../bread/18.png", "../bread/19.png", "../bread/20.png", "../bread/21.png", "../bread/22.png",
    "../bread/23.png", "../bread/24.png", "../bread/25.png", "../bread/26.png", "../bread/27.png", "../bread/28.png",
    "../bread/29.png", "../bread/30.png", "../bread/31.png");
let ImgNumber = 0;
let ImgLength = all_images.length - 1;
let speed = 35;
let lock = false;
let run;
function changeImage(direction) {
    if (document.images) {
        ImgNumber = ImgNumber + direction;
        if (ImgNumber > ImgLength)
            ImgNumber = 0;
        if (ImgNumber < 0)
            ImgNumber = ImgLength;
        document.slide_show.src = all_images[ImgNumber];
    }
}
function auto() {
    if (lock == true) {
        lock = false;
        window.clearInterval(run);
    }
    else if (lock == false) {
        lock = true;
        run = setInterval("changeImage(1)", speed);
    }
}
type="text/javascript"> auto();