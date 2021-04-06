var slideIndex = 0;

window.onload = function () {
  showSlides();
  scrollHead();
};

function scrollHead() {
  var winWidth = window.innerWidth;

  if (winWidth < 500) {
    document.getElementById("head-info").scrollTop =
      winWidth / 7 - winWidth / 10;
    console.log("scrolling");
  }
}

function openNav() {
  document.getElementById("mySidenav").style.width = "21vw";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 6000); // Change image every 6 seconds
}
