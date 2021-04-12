window.onload = function () {
  scrollHead();
  showMain();
};

const main = document.getElementById("main");
var pageCode = 0;

function showMain() {
  var height = window.innerWidth;
  main.innerText = "";
  main.innerHTML =
    '<embed type="text/html" src="snippets/home.html" style=" width:100vw; height: ' +
    height +
    'px;">';
}
function showContact() {
  //if (pageCode == 0) endSlideShow();
  pageCode = 4;
  var height = (window.innerWidth * 5) / 10;
  main.innerText = "";
  main.innerHTML =
    '<embed type="text/html" src="snippets/contact.html" style=" width:100vw; height: ' +
    height +
    'px;">';
}
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
