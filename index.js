var b = true;

$(".slider").click(function() {
  if (b == true) {
    $(".Monthly").hide();
    $(".Annually").show();
    b = false;
  } else {
    $(".Annually").hide();
    $(".Monthly").show();
    b = true;
  }
});

if ($(window).width() < 1334){
  console.log("tab");
}
