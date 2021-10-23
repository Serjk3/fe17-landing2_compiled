$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".gotop").fadeIn();
      $(".header").css({ backgroundColor: "rgba(53, 60, 101, 0.9)" });
      $(".header").css({ paddingBottom: "0" });
      $(".header-wrapper").css({ borderBottom: "0" });
    } else {
      $(".gotop").fadeOut();
      $(".header").css({ backgroundColor: "transparent" });
      $(".header").css({ paddingBottom: "25px" });
      $(".header-wrapper").css({ borderBottom: "1px solid #babbc5" });
    }
  });

  $(".gotop").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });
});
