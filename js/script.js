// current width
$(window).on("load", function () {
  var screenWidth = screen.width;
  if (screenWidth > 1600) {
    screenWidth = 1600;
  }
  setTimeout(() => {
    document.documentElement.style.setProperty(
      "--current-width",
      screenWidth + "px"
    );
  }, 100);
});
$(window).on("resize", function () {
  var screenWidth = screen.width;
  if (screenWidth > 1600) {
    screenWidth = 1600;
  }
  setTimeout(() => {
    document.documentElement.style.setProperty(
      "--current-width",
      screenWidth + "px"
    );
  }, 100);
});

var distance = $("#sp_main_tabs").offset().top,
  $window = $(window);
$window.scroll(function () {
  if (window.pageYOffset > distance) {
    $("#sp_main_tabs").addClass("fixedTop");
  } else if ($window.scrollTop() < distance) {
    $("#sp_main_tabs").removeClass("fixedTop");
    $(".sp_tab_head:first-of-type").addClass("active");
  }
});

$(".sp_tab_head a").click(function (e) {
  e.preventDefault();
  $(".sp_tab_head").removeClass("active");
  $(this).parent(".sp_tab_head").addClass("active");
  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top,
    },
    800
  );
});
$(document).on("scroll", onScroll);
function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('#sp_main_tabs a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('#sp_main_tabs li a').removeClass("active");
          currLink.parent(".sp_tab_head").addClass("active");
      }
      else{
          currLink.parent(".sp_tab_head").removeClass("active");
      }
  });
  if($(window).scrollTop() + $(window).height() == $(document).height()) {
    if($(".requestDemoFooter").hasClass("requestDemoFlag")){
      $(".requestDemo").hide();
    }
  }else{
    $(".requestDemo").show();
  }
}

$(".closeRequestFooter").on("click", function(){
  $(".requestDemoFooter").removeClass("requestDemoFlag");
  $(".requestDemo").show();
})
