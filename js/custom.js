window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    
    document.getElementById("rstlogo").style.width = "40px";
    //document.getElementById("navbar").style.backgroundColor = "rgba(31, 31, 31, 0.651)";
    document.getElementById("navbar").style.backgroundColor = "rgba(255, 255, 255)";
  } else {
    document.getElementById("rstlogo").style.width = "80px";
    document.getElementById("navbar").style.backgroundColor = "transparent";
    navColor(x)
  }
}

function navColor(x) {
  if (x.matches) { // If media query matches
    document.getElementById("navbar").style.backgroundColor = "rgba(255, 255, 255)";
  } else{
    document.getElementById("navbar").style.backgroundColor = "transparent";
  }
}

var x = window.matchMedia("(max-width: 979px)")
navColor(x)
x.addListener(navColor)