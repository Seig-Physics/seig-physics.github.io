//モバイル用メニュー表示用スクリプト
var open_box_button = document.getElementById("open_box_button");
var mobile_header_content = document.querySelector(".mobile_header_content");
var fa_times = document.querySelector(".fa-times")

open_box_button.onclick = function () {
    mobile_header_content.classList.add("mobile_header_content_active");
    open_box_button.style.display = "none";
    fa_times.style.display = "block";
}
fa_times.onclick = function () {
    mobile_header_content.classList.remove("mobile_header_content_active");
    open_box_button.style.display = "block";
    fa_times.style.display = "none";
}
//ここまで


//loading完了時文字ポップアップ
var header_title = document.getElementById("header_title");
var loading_animation = document.querySelector(".loading_animation");
window.onload = function () {
    header_title.classList.add("header_title_active");
    loading_animation.classList.add("loaded");
}

var gallery_img = document.querySelectorAll(".gallery_img");
var count_g = 0;
for(var i = 0; i < gallery_img.length; i++){
    gallery_img[i].addEventListener('click', function () {
        count_g++;
        this.classList.add("image_active");
        window.open(this.src, '_blank');
        if (count_g > 1) {
            count_g = 0;
            this.classList.remove("image_active");
        }
    },false);
}
 /*
for (var i = 0; i < gallery_img.length; i++) {
    

    gallery_img[i].addEventListener("click", () => {
        if (gallery_img.classList.contains("image_active")) {
            gallery_img.classList.add("image_active");
        } else {
            gallery_img.classList.remove("image_active");
        }
    },false

    );
}
*/