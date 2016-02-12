var scroll = require("./animateScroll");
var $ = require("./lib/qsa");

var jump = function(e) {
  e.preventDefault();
  var href = this.getAttribute("href");
  window.history.pushState(href, "", href);
  scroll(document.querySelector(href));
  console.log(href);
}

console.log($(`[href^="#"]`));

$(`[href^="#"]`).forEach(el => el.addEventListener("click", jump));