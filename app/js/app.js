$(document).ready(function() {
  var j = 0;
  var slider = document.getElementsByClassName("slider__row")[0];

  var step = - slider.clientWidth / (slider.children.length);


  $('.next').click(function () {
    j += 1;

    if (j < slider.children.length ) {
      var tranSform = "translateX("+ j * step +"px)";
      document.getElementById("myDIV").style.transform = tranSform;
    } else {
      j = 0;
      var tranSform = "translateX("+ j * step +"px)";
      document.getElementById("myDIV").style.transform = tranSform;
    }
  });

  $('.prev').click(function () {
    j -= 1;

    if (j > -1) {
      var tranSform = "translateX("+ j * step +"px)";
      document.getElementById("myDIV").style.transform = tranSform;
    } else {
      j = slider.children.length - 1;
      var tranSform = "translateX("+ j * step +"px)";
      document.getElementById("myDIV").style.transform = tranSform;
    }
  });
})
