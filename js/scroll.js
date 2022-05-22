
$(window).scroll(function () {
  //스크롤 이동시 작동코드
  // $(".uniscope").attr("src", $(".uniscope").attr("src").replace(".png","_white.png"));
  var scrollTop = $(document).scrollTop();
    if (scrollTop == 0) {
        $(".navbar-inverse").css({ "background-color": "rgba(0,0,0,0.8)" });
      return true;
    } else {
        $(".navbar-inverse").css({ "background-color": "#000000" });
      return false;
    }
});
