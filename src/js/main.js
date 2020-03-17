// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");

var $ = require("./lib/qsa");

var uncollapseButton = $.one(".uncollapse");
var uncollapse = function uncollapse() {
  $.one(".shootings").classList.remove("collapsed");
};
uncollapseButton.addEventListener("click", uncollapse);
uncollapseButton.addEventListener("keydown", (ev) => {
  // enter or spacebar, mimicking <button>'s behavior
  if (ev.keyCode === 13 || ev.keyCode === 32){
    ev.preventDefault(); // avoid, e.g., scroll down on spacebar
    uncollapse();
  }
});
