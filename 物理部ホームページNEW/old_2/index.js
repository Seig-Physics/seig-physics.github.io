window.onload = function () {
    //Animation  ↓↓
    const anime_screen = document.getElementById('loading_animation');
    window.location.hash = "header"
    sleep(500)
    anime_screen.classList.add('loaded');
}

$('a[href^="#"]').click(function () {
    // スクロールの速度
    var speed = 400; // ミリ秒で記述
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({
      scrollTop: position
    }, speed, 'swing');
    return false;
});
  
function sleep(waitMsec) {
    var startMsec = new Date();
    while (new Date() - startMsec < waitMsec);
  }