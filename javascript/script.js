window.onload = function () {
  scrollHead();
  showMain();
};
var over = document.getElementById("overlay");
var foc = false;
function focusOverlay() {
  let y = window.pageYOffset;
  window.scrollTo(0, y + 10);
  if (foc) setTimeout(focusOverlay, 10);
}
function mouseOverlay() {
  foc = true;
  focusOverlay();
}
function mouseLeft() {
  foc = false;
}

var over2 = document.getElementById("overlay2");
var foc2 = false;
function focusOverlay2() {
  let y2 = window.pageYOffset;
  window.scrollTo(0, y2 - 10);
  if (foc2) setTimeout(focusOverlay2, 10);
}
function mouseOverlay2() {
  foc2 = true;
  focusOverlay2();
}
function mouseLeft2() {
  foc2 = false;
}

//switching functions
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
  pageCode = 4;
  var height = (window.innerWidth * 5) / 10;
  main.innerText = "";
  main.innerHTML =
    '<embed type="text/html" src="snippets/contact.html" style=" width:100vw; height: ' +
    height +
    'px;">';
}

//topmost scroll
function scrollHead() {
  var winWidth = window.innerWidth;

  if (winWidth < 500) {
    document.getElementById("head-info").scrollTop =
      winWidth / 7 - winWidth / 10;
    console.log("scrolling");
  }
}

//sidenav
function openNav() {
  document.getElementById("mySidenav").style.width = "21vw";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
